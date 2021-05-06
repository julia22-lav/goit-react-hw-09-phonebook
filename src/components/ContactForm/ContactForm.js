import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { connect } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onChange = event => {
    // this.reset();
    event.preventDefault();

    console.dir(event.currentTarget);
    const { value, name } = event.currentTarget;
    const currentState = this.state;
    const upadateState = { [name]: value };
    this.setState({ ...currentState, ...upadateState });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    event.currentTarget.value = '';
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} className={s.Form}>
        <Form.Group controlId="formBasicName">
          <Form.Label className={s.TextLabel}>Name</Form.Label>
          <Form.Control
            className={s.FormControl}
            type="name"
            name="name"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label className={s.TextLabel}>Number</Form.Label>
          <Form.Control
            className={s.FormControl}
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={this.state.number}
            onChange={this.onChange}
          />
        </Form.Group>
        <Button className={s.Button} variant="primary" type="submit">
          Add contact
        </Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(operations.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
