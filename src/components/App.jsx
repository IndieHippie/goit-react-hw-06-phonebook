import React from 'react';
import ContactForm from './ContactForn/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppStyled } from './App.module';
import { useSelector } from 'react-redux';

function App() {
  
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts)


  const getFilteredContacts = e => {
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts
  };

  
  return (
    <AppStyled>
      <h2>Phonebook</h2>
      <ContactForm/>
      <h3>Contacts</h3>
      <Filter/>
      <ContactList listContact={getFilteredContacts()} />
    </AppStyled>
  );
}

export default App;
