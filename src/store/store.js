import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slice';

export default configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
