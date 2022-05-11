// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { delContactAction } from 'redux/contactSlice';
import './ContactsList.css';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.contacts);
  const filter = useSelector(state => state.contact.filter);

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContact = id => {
    dispatch(delContactAction(id));
  };

  return (
    <>
      <ul className="ContactsList">
        {filterContacts.map(contact => (
          <li
            className="ContactsList__item"
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          >
            <button
              onClick={() => deleteContact(contact.id)}
              className="ContactsList__button"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
