import { useState } from 'react';
import { Form, Input, Button } from 'components/ContactForn/ContactForm.module';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/sliceContact';


const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value)
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
          contacts.some(
            value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
          )
        ) {
          alert(`${name} is alredy in contacts`);
        } else {
          dispatch(add({ name, number }));
        }
        reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
        </label>
        <Input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>
          <span>Number</span>
        </label>
        <Input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
}

export default ContactForm;
