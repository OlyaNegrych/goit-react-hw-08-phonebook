import axios from 'axios';
axios.defaults.baseURL = 'https://6368c6be15219b8496067dd6.mockapi.io/contacts ';
// https://connections-api.herokuapp.com/

export const getContacts = async () => {
  const response = await axios.get('/');
  return response;
};

export const getContactById = async contact_id => {
  const response = await axios.get(`/${contact_id}`);
  return response;
};
