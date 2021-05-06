import React from 'react';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import s from './ContactsPage.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactsPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className={s.h2Header}>Phonebook</h2>
          <ContactForm />
        </Col>
        <Col>
          <h2 className={s.h2Header}>Contacts</h2>
          <Filter />
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactsPage;
