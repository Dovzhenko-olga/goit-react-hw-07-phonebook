import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContacts({ name, number }) {
  const contact = { name, number };
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(contactId) {
  return await axios.delete(`/contacts/${contactId}`);
}