import React from 'react';

import ContactListItem from './ContactListItem';
import './ContactList.scss';

const ContactList = ({ contacts, onDelete }) => (
  <ul className="ContactList">
    {<ContactListItem contacts={contacts} onDelete={onDelete} />}
  </ul>
);

export default ContactList;
