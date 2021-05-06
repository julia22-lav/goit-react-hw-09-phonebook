import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

class ContactListItem extends Component {
  render() {
    const { id, name, number, deleteContact } = this.props;
    return (
      <li id={id} className={s.listItem}>
        {name}: {number}
        <button
          onClick={() => {
            deleteContact(id);
          }}
          className={s.buttonListItem}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};
export default ContactListItem;
