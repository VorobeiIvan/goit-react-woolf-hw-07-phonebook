import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addContactThunk } from '../store/thunk';
import NameInput from './NameInput';
import NumberInput from './NumberInput';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const formSubmitHandler = event => {
    event.preventDefault();

    const contactData = {
      name: name,
      number: number,
    };

    dispatch(addContactThunk(contactData));

    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <NameInput value={name || ''} setName={setName} />
      <NumberInput value={number || ''} setNumber={setNumber} />
      <button className="btn-add" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
