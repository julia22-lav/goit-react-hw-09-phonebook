import { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import s from './LoginPage.module.css';

class LoginPage extends Component {
  state = { email: '', password: '' };

  reset = () => {
    this.setState({ email: '', password: '' });
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
    this.props.onLogin(this.state);
    this.reset();
  };
  render() {
    return (
      <>
        <h2>Login page</h2>
        <Form onSubmit={this.handleSubmit} className={s.Form}>
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
              placeholder="Enter password"
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
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
