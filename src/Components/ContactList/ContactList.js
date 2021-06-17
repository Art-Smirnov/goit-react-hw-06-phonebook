import React from 'react';

import ContactListItem from './ContactListItem';
import './ContactList.scss';

const ContactList = () => (
  <ul className="ContactList">{<ContactListItem />}</ul>
);

export default ContactList;
