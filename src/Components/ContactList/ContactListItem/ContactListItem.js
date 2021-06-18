import React from 'react';
import PropTypes from 'prop-types';

import './ContactListItem.scss';

const ContactListItem = ({ contacts, onDelete }) =>
  contacts.map(({ id, name, number }) => (
    <li className="ContactListItem" key={id}>
      <span className="ContactListItem__data">
        {name}: {number}
      </span>

      <button
        className="delete__btn"
        onClick={() => onDelete(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

ContactListItem.propTypes = {
  onDelete: PropTypes.func.isRequired,

  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
    .isRequired,
};

export default ContactListItem;
