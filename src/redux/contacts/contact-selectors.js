import { createSelector } from "@reduxjs/toolkit";

export const getValue = state => state.contact.filter;
export const getContacts = state => state.contact.contacts;
export const getIsLoading = state => state.contact.isLoading;

export const filteredContacts = createSelector(
  [getContacts, getValue],
  (contacts, filter) => {
    const normalizedSearch = filter.toLowerCase();

    return contacts.filter(({name}) =>
      name.toLowerCase().includes(normalizedSearch));
  },
);

// export const filteredContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getValue(state);
//   const normalizedSearch = filter.toLowerCase();

//   return contacts.filter(({name}) =>
//     name.toLowerCase().includes(normalizedSearch));
// }
