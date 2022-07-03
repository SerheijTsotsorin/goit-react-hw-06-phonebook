import React, { useState } from 'react';
import { addContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import './ContactsForm.css';

function ContactsForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    formSubmitHandler({ name, number });
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;

      default:
        return;
    }
  };

  const contacts = useSelector(state => state.contact.contacts);
  // add new contact
  const formSubmitHandler = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const isFoundName = contacts?.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isFoundName) {
      toast.error(`${name} is already in contacts!`);
      return;
    }
    // if not found, add new contact
    const newData = { id: nanoid(), name, number };
    dispatch(addContact(newData));
    toast.success('Successfully added!');
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label className="Form__lable">
        Name
        <input
          className="Form__input"
          onChange={handleChange}
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
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className="Form__button" type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactsForm;
