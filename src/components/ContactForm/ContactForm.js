import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import operations from '../../redux/contacts/contacts-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    contact => dispatch(operations.addContact(contact)),
    [dispatch],
  );

  const reset = () => {
    setContact({ name: '', number: '' });
  };

  const onChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(contact);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit} className={s.Form}>
      <Form.Group controlId="formBasicName">
        <Form.Label className={s.TextLabel}>Name</Form.Label>
        <Form.Control
          className={s.FormControl}
          type="name"
          name="name"
          value={contact.name}
          placeholder="Enter name"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicNumber">
        <Form.Label className={s.TextLabel}>Number</Form.Label>
        <Form.Control
          className={s.FormControl}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={contact.number}
          onChange={onChange}
        />
      </Form.Group>
      <Button className={s.Button} variant="primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
