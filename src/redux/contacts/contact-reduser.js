import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactActions from './contact-actions';
import { fetchContacts } from './contact-operations';


const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, {payload}) => payload,
  [contactActions.addContactsSuccess]: (state, { payload }) => {
      return [payload, ...state];
  },
  [contactActions.deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

const filter = createReducer('', {
  [contactActions.changeFilter]: (_, { payload }) => payload,
})

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [contactActions.addContactsRequest]: () => true,
  [contactActions.addContactsSuccess]: () => false,
  [contactActions.addContactsError]: () => false,
  [contactActions.deleteContactsRequest]: () => true,
  [contactActions.deleteContactsSuccess]: () => false,
  [contactActions.deleteContactsError]: () => false,
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