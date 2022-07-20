const models = require('../models/');

const getAllContacts = async () => {
  try {
    const data = await models.listContacts();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const getContactById = async contactId => {
  try {
    const data = await models.getContactById(contactId);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const addContact = async body => {
  try {
    const data = await models.addContact(body);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const removeContact = async contactId => {
  try {
    const data = await models.removeContact(contactId);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
const updateContact = async (contactId, body) => {
  try {
    const data = await models.updateContact(contactId, body);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};
