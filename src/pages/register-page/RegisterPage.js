import { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import s from './RegisterPage.module.css';

class RegisterPage extends Component {
  state = { name: '', email: '', password: '' };

  reset = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    const currentState = this.state;
    const updateState = { [name]: value };
    this.setState({ ...currentState, ...updateState });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRegister(this.state);
    this.reset();
  };
  render() {
    return (
      <>
        <h2>Registration page</h2>
        <Form onSubmit={this.handleSubmit} className={s.Form}>
          <Form.Group controlId="formBasicName">
            <Form.Label className={s.TextLabel}>Name</Form.Label>
            <Form.Control
              className={s.FormControl}
              type="name"
              name="name"
              value={this.state.name}
              placeholder="Enter name"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className={s.TextLabel}>Email address</Form.Label>
            <Form.Control
              className={s.FormControl}
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className={s.TextLabel}>Password</Form.Label>
            <Form.Control
              className={s.FormControl}
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button className={s.Button} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
