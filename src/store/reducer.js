import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsSliceReducer } from './slice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsSliceReducer);

export const reducer = {
  contacts: persistedReducer,
};
