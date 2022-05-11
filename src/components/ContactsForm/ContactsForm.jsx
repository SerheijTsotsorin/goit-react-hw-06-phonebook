import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { nanoid } from 'nanoid';

import './ContactsForm.css';
// import { current } from '@reduxjs/toolkit';
// import PropTypes from 'prop-types';

function ContactsForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
      // completed: false,
    };

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label className="Form__lable">
        Name
        <input
          className="Form__input"
          onChange={evt => setName(evt.currentTarget.value)}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className="Form__lable">
        Number
        <input
          className="Form__input"
          onChange={evt => setNumber(evt.currentTarget.value)}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button
        className="Form__button"
        type="submit"
        // onClick={() => handleSubmit}
      >
        Add contact
      </button>
    </form>
  );
}

export default ContactsForm;

// const handleSubmit = evt => {
//   evt.preventDefault();

//   const contact = {
//     id: nanoid(),
//     name: name,
//     number: number,
//   };

//   dispatch(addContact(contact));
//   // onSubmit(name, number);
//   reset();
// };

// const reset = () => {
//   setName('');
//   setNumber('');
// };

// const handleChange = evt => {
//   const { name, value } = evt.target;
//   switch (name) {
//     case 'name':
//       setName(value);
//       break;

//     case 'number':
//       setNumber(value);
//       break;

//     default:
//       return;
//   }
// };

// ContactsForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// Repeta

// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logIn } from '../redux/userSlice';

// export const LoginForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(logIn(form.elements.login.value));
//     form.reset();
//     navigate('/dashboard', { replace: true });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <br />
//       <button type="submit">Log in</button>
//     </form>
//   );
// };
