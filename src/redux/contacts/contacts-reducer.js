import { combineReducers } from 'redux';

import types from './contacts-types';
import initialContacts from '../../data/contacts.json';

// const contactsInitialState = {
//   items: initialContacts,
//   filter: '',
// };

const items = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      const normalizedName = payload.name.toLocaleLowerCase();
      return state.some(
        contact => contact.name.toLocaleLowerCase() === normalizedName,
      )
        ? alert(`${payload.name} is already in contacts`)
        : [payload, ...state];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
