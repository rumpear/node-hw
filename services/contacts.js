const models = require('../models/contacts');
// const {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// } = require('../models/contacts');

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

module.exports = { getAllContacts, getContactById };
