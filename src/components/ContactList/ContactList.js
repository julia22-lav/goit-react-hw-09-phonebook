import React, { useEffect } from 'react';
import ContactListItem from '../ContactListItem';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import selectors from '../../redux/contacts/contacts-selectors';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ContactList() {
  const contacts = useSelector(selectors.getContacts);
  const dispatch = useDispatch();
  const deleteContact = contactId =>
    dispatch(operations.deleteContact(contactId));

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

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
