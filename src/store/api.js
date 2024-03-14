import axios from 'axios';

const baseURL =
  'https://65f1f4bc034bdbecc7641d5b.mockapi.io/contacts';
const contactsEndpoint = '/contacts';

export const fetchContacts = async () => {
  try {
    const response = await axios.get(`${baseURL}${contactsEndpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw new Error('Failed to fetch contacts');
  }
};

export const addContact = async contactData => {
  try {
    const response = await axios.post(
      `${baseURL}${contactsEndpoint}`,
      contactData
    );
    return response.data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw new Error('Failed to add contact');
  }
};

export const deleteContact = async contactId => {
  try {
    await axios.delete(`${baseURL}${contactsEndpoint}/${contactId}`);
    return contactId;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw new Error('Failed to delete contact');
  }
};

export const filterContacts = async filter => {
  try {
    const response = await axios.get(
      `${baseURL}${contactsEndpoint}?filter=${filter}`
    );
    return response.data;
  } catch (error) {
    console.error('Error filtering contacts:', error);
    throw new Error('Failed to filter contacts');
  }
};
