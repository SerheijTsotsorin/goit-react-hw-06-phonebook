import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

import './App.css';

export const App = () => {
  const contacts = useSelector(state => state.contact.contacts);

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <>
      <div className="Phonebook">
     
        <div className="Phonebook__wrapper">
          <h1 className="Phonebook__title">Phonebook</h1>
          <ContactsForm />
        </div>
      </div>

      <div className="Contacts">
        <h2 className="Contacts__title">Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
};
