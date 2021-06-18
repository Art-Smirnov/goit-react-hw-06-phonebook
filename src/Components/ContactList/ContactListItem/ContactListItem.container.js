import contactsActions from '../../../redux/contacts/contacts-actions';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';

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
