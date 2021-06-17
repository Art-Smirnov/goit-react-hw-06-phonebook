import React from 'react';
import PropTypes from 'prop-types';
import contactsActions from '../../../redux/contacts/contacts-actions';
import { connect } from 'react-redux';
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

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
