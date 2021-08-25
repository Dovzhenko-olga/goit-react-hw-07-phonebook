import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactActions from './contact-actions';
import { fetchContacts, addContact, deleteContact } from './contact-operations';


const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, {payload}) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
      return [payload, ...state];
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

const filter = createReducer('', {
  [contactActions.changeFilter]: (_, { payload }) => payload,
})

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
})

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  contacts,
  filter,
  isLoading,
  error,
});