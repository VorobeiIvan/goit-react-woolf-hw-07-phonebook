import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await fetchContacts();
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    return await addContact(contactData);
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    return await deleteContact(contactId);
  }
);
