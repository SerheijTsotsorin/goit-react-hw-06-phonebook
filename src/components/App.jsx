import './App.css';
import React, { useState, useEffect } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

// import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

// function App() {
//   const contacts = useSelector(getContactsArr);

//   useEffect(() => {
//     if (contacts.length === 0) {
//       toast.error('Phonebook is empty!');
//     }
//   }, [contacts]);

//   return (
//     <Container>
//       <Toaster
//         toastOptions={{
//           style: {
//             border: '1px solid #713200',
//             padding: '16px',
//           },
//         }}
//       />
//       <TitleMain>Phonebook</TitleMain>
//       <Form />
//       <TitleSecond>Contacts</TitleSecond>
//       <Filter />
//       <Contacts />
//     </Container>
//   );
// }

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    return parsedContacts ?? [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const formSubmitHandler = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} уже есть в списке ваших контактов`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const deleteContact = contactID => {
    setContacts(contacts.filter(({ id }) => id !== contactID));
  };

  const changeFilter = evt => {
    setFilter(evt.target.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <div className="Phonebook">
        <div className="Phonebook__wrapper">
          <h1 className="Phonebook__title">Phonebook</h1>
          <ContactsForm onSubmit={formSubmitHandler} />
        </div>
      </div>

      <div className="Contacts">
        <h2 className="Contacts__title">Contacts </h2>
        <Filter filter={filter} onChange={changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </>
  );
};

// export default App;
