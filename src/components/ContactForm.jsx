import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import NameInput from './NameInput';
import NumberInput from './NumberInput';
import { addContact } from '../store/slice';
import { selectContactsState } from '../store/slice';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsState);
  const formSubmitHandler = event => {
    event.preventDefault();

    if (
      contacts.some(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert('Contact with this name or number already exists!');
      return;
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    dispatch(addContact(contact));
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
