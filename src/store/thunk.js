import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../store/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    try {
      const data = await fetchContacts();
      console.log('Fetched contacts:', data);
      return data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      return isRejectedWithValue(error.response.data);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    try {
      const data = await addContact(contactData);
      console.log('Added contact:', data);
      return data;
    } catch (error) {
      console.error('Error adding contact:', error);
      return isRejectedWithValue(error.response.data);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await deleteContact(contactId);
      console.log('Deleted contact with ID:', contactId);
      return contactId;
    } catch (error) {
      console.error('Error deleting contact:', error);
      return isRejectedWithValue(error.response.data);
    }
  }
);
