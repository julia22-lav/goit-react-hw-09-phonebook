import React, { useState } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import s from './RegisterPage.module.css';

function RegisterPage({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  // handleChange = event => {
  //   event.preventDefault();
  //   const { name, value } = event.currentTarget;
  //   const currentState = this.state;
  //   const updateState = { [name]: value };
  //   this.setState({ ...currentState, ...updateState });
  // };

  const handleNameChange = event => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onRegister({ name, email, password });
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
            value={name}
            placeholder="Enter name"
            onChange={handleNameChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className={s.TextLabel}>Email address</Form.Label>
          <Form.Control
            className={s.FormControl}
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className={s.TextLabel}>Password</Form.Label>
          <Form.Control
            className={s.FormControl}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
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
