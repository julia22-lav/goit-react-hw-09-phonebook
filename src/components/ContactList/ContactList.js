import { Component } from 'react';
import ContactListItem from '../ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import selectors from '../../redux/contacts/contacts-selectors';
import ListGroup from 'react-bootstrap/ListGroup';

class ContactList extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ListGroup className={s.ListGroup}>
        {contacts.map(({ name, number, id }) => {
          return (
            <ContactListItem
              name={name}
              number={number}
              key={id}
              id={id}
              deleteContact={deleteContact}
              className={s.ContactList}
            />
          );
        })}
      </ListGroup>
    );
  }
}

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId => dispatch(operations.deleteContact(contactId)),
  onLoad: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
