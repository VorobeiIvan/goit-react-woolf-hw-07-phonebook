import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  filterContacts,
} from './api';

const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    return fetchContacts();
  }
);

const addNewContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    return addContact(contactData);
  }
);

const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    return deleteContact(contactId);
  }
);

const filterContactsThunk = createAsyncThunk(
  'contacts/filterContacts',
  async filter => {
    return filterContacts(filter);
  }
);

export {
  fetchContactsThunk,
  addNewContactThunk,
  deleteContactThunk,
  filterContactsThunk,
};
