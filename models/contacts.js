const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, './contacts.json');
const updateContactsData = data =>
  fs.writeFile(contactsPath, JSON.stringify(data, null, 2));

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async contactId => {
  const data = await listContacts();
  const contact = data.find(item => item.id === contactId);

  if (!contact) {
    return null;
  }

  return contact;
};

const removeContact = async contactId => {
  const data = await listContacts();

  const idx = data.findIndex(item => item.id === contactId);
  if (idx === -1) {
    return null;
  }

  const [contactToDelete] = data.splice(idx, 1);
  updateContactsData(data);
  return contactToDelete;
};

const addContact = async body => {
  const data = await listContacts();

  data.push(body);
  updateContactsData(data);
  return body;
};

const updateContact = async (contactId, body) => {
  const data = await listContacts();
  const idx = data.findIndex(item => item.id === contactId);

  if (idx === -1) {
    return null;
  }

  data[idx] = { id: contactId, ...body };
  updateContactsData(data);
  return data[idx];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
