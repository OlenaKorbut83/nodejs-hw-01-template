import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  const contactsList = await readContacts();
  contactsList.pop();
  await writeContacts(contactsList);
};

removeLastContact();
