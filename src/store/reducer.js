import { combineReducers } from 'redux';
import contactsReducer from './slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export const reducer = {
  contacts: rootReducer,
};
