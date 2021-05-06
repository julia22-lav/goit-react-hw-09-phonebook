import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import operations from '../../redux/contacts/contacts-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  // state = {
  //   name: '',
  //   number: '',
  // const [contact, setContact] = useState({
  //   name: '',
  //   number: '',
  // });

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    contact => dispatch(operations.addContact(contact)),
    [dispatch],
  );

  const onNameChange = event => {
    event.preventDefault();
    setName(event.target.value);
  };

  const onNumberChange = event => {
    event.preventDefault();
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit} className={s.Form}>
      <Form.Group controlId="formBasicName">
        <Form.Label className={s.TextLabel}>Name</Form.Label>
        <Form.Control
          className={s.FormControl}
          type="name"
          name="name"
          value={name}
          placeholder="Enter name"
          onChange={onNameChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicNumber">
        <Form.Label className={s.TextLabel}>Number</Form.Label>
        <Form.Control
          className={s.FormControl}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={onNumberChange}
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
