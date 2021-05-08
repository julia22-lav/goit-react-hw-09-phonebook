import React, { useState } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import s from './LoginPage.module.css';

function LoginPage({ onLogin }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const reset = () => {
    setUser({ email: '', password: '' });
  };

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onLogin(user);
    reset();
  };

  return (
    <>
      <h2>Login page</h2>
      <Form onSubmit={handleSubmit} className={s.Form}>
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
            placeholder="Enter password"
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
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
