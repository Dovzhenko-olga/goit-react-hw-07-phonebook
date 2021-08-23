import * as contactAPI from 'services/contact-api';
import * as contactActions from './contact-actions';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactActions.fetchContactsRequest());

//   try {
//     const contacts = await contactAPI.fetchContacts();
//   dispatch(contactActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactActions.fetchContactsError(error));
//   }
// };

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async () => {
    const contacts = await contactAPI.fetchContacts();
    return contacts;
  }
)

export const addContact = (data) => async dispatch => {
  dispatch(contactActions.addContactsRequest());

  try {
    const contacts = await contactAPI.addContacts(data);
  dispatch(contactActions.addContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactActions.addContactsError(error));
  }
};

export const deleteContact = contactId => async dispatch => {
  dispatch(contactActions.deleteContactsRequest());
  try {
    dispatch(contactActions.deleteContactsSuccess(contactId));
  } catch (error) {
    dispatch(contactActions.deleteContactsError(error));
  }
}