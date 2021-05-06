import types from './contacts-types';
import { v4 as genId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// const addContact = ({ name, number, id }) => {
//   return {
//     type: types.AddContact,
//     payload: { name, number, id: genId() },
//   };
// };

// const addContact = createAction(types.AddContact, ({ name, number }) => {
//   return { payload: { name, number, id: genId() } };
// });

// const deleteContact = contactId => {
//   return {
//     type: types.DeleteContact,
//     payload: contactId,
//   };
// };

// const deleteContact = createAction(types.DeleteContact);

// const filterChange = value => {
//   return {
//     type: types.FilterChange,
//     payload: value,
//   };
// };

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const filterChange = createAction(types.FilterChange);

// export default { addContact, deleteContact, filterChange };

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterChange,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
};
