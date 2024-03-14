import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../store/selectors';
import { deleteContactThunk } from '../store/thunk';
const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className="contact-list">
      {visibleContacts.map(contact => (
        <li key={contact.id} className="contact-item">
          {contact.name}: {contact.number}
          <button
            className="btn-del"
            type="button"
            onClick={() => dispatch(deleteContactThunk(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
