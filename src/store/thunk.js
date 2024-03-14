
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, filterContacts } from './api';
import { setLoading, setError, setContacts } from './slice';

const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const contacts = await fetchContacts();
      dispatch(setContacts(contacts));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

const addNewContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contactData, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const newContact = await addContact(contactData);
      return newContact;
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      await deleteContact(contactId);
      return contactId;
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

const filterContactsThunk = createAsyncThunk(
  'contacts/filterContacts',
  async (filter, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const filteredContacts = await filterContacts(filter);
      return filteredContacts;
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export {
  fetchContactsThunk,
  addNewContactThunk,
  deleteContactThunk,
  filterContactsThunk,
};
