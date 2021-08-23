export const getValue = state => state.contact.filter;
export const getContacts = state => state.contact.contacts;
export const isLoading = state => state.contact.isLoading;

export const filteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getValue(state);
  const normalizedSearch = filter.toLowerCase();

  return contacts.filter(({name}) =>
    name.toLowerCase().includes(normalizedSearch));
}