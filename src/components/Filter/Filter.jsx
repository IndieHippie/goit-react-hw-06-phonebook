import { Label, Section, Input } from './Filter.module';
import { useDispatch, useSelector } from 'react-redux';
import { qwery } from 'redux/sliceFilter';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <Section>
      <Label>Find contacts by Name</Label>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => dispatch(qwery(e.currentTarget.value))}
        value={filter}
        required
      />
    </Section>
  );
};

export default Filter;
