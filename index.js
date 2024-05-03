const { program } = require("commander");

// імпортую методи об'єкту з contacts.js і зберігаю в змінну
const contacts = require("./contacts.js");
// console.log(" contacts: ", contacts);

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();
// console.log("options: ", options);

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log("oneContact: ", oneContact);

      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log("newContact: ", newContact);
      break;

    case "remove":
      const deleteBook = await contacts.removeContact(id);
      console.log("deleteBook: ", deleteBook);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
