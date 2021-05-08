import React, { useState } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import s from './RegisterPage.module.css';

function RegisterPage({ onRegister }) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const reset = () => {
    setUser({ name: '', email: '', password: '' });
  };

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onRegister(user);
    reset();
  };

  return (
    <>
      <h2>Registration page</h2>
      <Form onSubmit={handleSubmit} className={s.Form}>
        <Form.Group controlId="formBasicName">
          <Form.Label className={s.TextLabel}>Name</Form.Label>
          <Form.Control
            className={s.FormControl}
            type="name"
            name="name"
            value={user.name}
            placeholder="Enter name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className={s.TextLabel}>Email address</Form.Label>
          <Form.Control
            className={s.FormControl}
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className={s.TextLabel}>Password</Form.Label>
          <Form.Control
            className={s.FormControl}
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button className={s.Button} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
