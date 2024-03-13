import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectFilter, selectContactsState } from 'store/slice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsState);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="contact-list">
      {filteredContacts.map(contact => (
        <li key={contact.id} className="contact-item">
          {contact.name}: {contact.number}
          <button
            className="btn-del"
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
