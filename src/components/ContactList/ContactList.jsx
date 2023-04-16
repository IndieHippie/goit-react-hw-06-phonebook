import PropTypes from 'prop-types';
import { Button, Container, List, ContactItem } from './ContactList.module';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/sliceContact';

const ContactList = ({ listContact }) => {
  const dispatch = useDispatch();
  return listContact.map(contact => { 
    return (
      <Container key={contact.id}>
        <List>         
            <ContactItem key={contact.id}> 
              {contact.name}: {contact.number} 
              <Button
                onClick={() => {
                  dispatch(remove(contact.id))
                }}
              >
                Delete
              </Button>
            </ContactItem>       
        </List>
      </Container>
    );
  });
};


ContactList.propTypes = {
  listContact: PropTypes.array.isRequired,
};

export default ContactList;
