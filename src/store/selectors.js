import { createSelector } from 'reselect';

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
