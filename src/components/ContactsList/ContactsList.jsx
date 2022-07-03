import { useSelector, useDispatch } from 'react-redux';
import { delContactAction } from 'redux/contactSlice';
import toast from 'react-hot-toast';
import './ContactsList.css';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.items);
  const filter = useSelector(state => state.contact.filter);

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContact = id => {
    dispatch(delContactAction(id));
    toast.success('Successfully deleted!');
  };

  return (
    <ul className="ContactsList">
      {filterContacts &&
        filterContacts.map(contact => (
          <li
            className="ContactsList__item"
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          >
            <p className="ContactsList__text">
              {contact.name}: {contact.number}
            </p>
            <button
              onClick={() => deleteContact(contact.id)}
              className="ContactsList__button"
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
}
