import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import initialContacts from '../../data/contacts.json';
import contactsActions from './contacts-actions';

const items = createReducer(initialContacts, {
  [contactsActions.addContact]: (state, { payload }) => {
    const normalizedName = payload.name.toLocaleLowerCase();
    return state.some(
      contact => contact.name.toLocaleLowerCase() === normalizedName,
    )
      ? alert(`${payload.name} is already in contacts`)
      : [payload, ...state];
  },

  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
