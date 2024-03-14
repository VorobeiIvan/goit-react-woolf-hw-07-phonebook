import axios from 'axios';

const baseURL = 'https://65f1f4bc034bdbecc7641d5b.mockapi.io/contacts/';
const contactsEndpoint = '/contacts';

export const fetchContacts = async () => {
  const response = await axios.get(`${baseURL}${contactsEndpoint}`);
  return response.data;
};

export const addContact = async contactData => {
  const response = await axios.post(
    `${baseURL}${contactsEndpoint}`,
    contactData
  );
  return response.data;
};

export const deleteContact = async contactId => {
  await axios.delete(`${baseURL}${contactsEndpoint}/${contactId}`);
  return contactId;
};

export const filterContacts = async filter => {
  const response = await axios.get(
    `${baseURL}${contactsEndpoint}?filter=${filter}`
  );
  return response.data;
};
