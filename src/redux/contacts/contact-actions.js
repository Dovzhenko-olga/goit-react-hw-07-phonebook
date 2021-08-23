// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';


export const changeFilter = createAction('contact/changeFilter');
// export const fetchContactsRequest = createAction('contact/fetchContactsRequest');
// export const fetchContactsSuccess = createAction('contact/fetchContactsSuccess');
// export const fetchContactsError = createAction('contact/fetchContactsError');

export const addContactsRequest = createAction('contact/addContactsRequest');
export const addContactsSuccess = createAction('contact/addContactsSuccess');
export const addContactsError = createAction('contact/addContactsError');

export const deleteContactsRequest = createAction('contact/deleteContactsRequest');
export const deleteContactsSuccess = createAction('contact/deleteContactsSuccess');
export const deleteContactsError = createAction('contact/deleteContactsError');