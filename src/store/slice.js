import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const selectContactsState = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;
export const contactsSliceReducer = contactsSlice.reducer;
export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
