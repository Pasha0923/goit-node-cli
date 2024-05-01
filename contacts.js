// contacts.js
const fs = require("node:fs/promises");
const path = require("path");
const contactsPath = path.join(_dirname, "db", "contacts.json");
console.log("contactsPath: ", contactsPath);

async function listContacts() {
  const getAllContacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(getAllContacts); // ...твій код. Повертає масив контактів.
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
module.exports = {
  getContactById,
  removeContact,
  addContact,
  listContacts,
};
