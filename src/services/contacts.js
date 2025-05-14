import { Contact } from '../models/Contact.js';

export async function getAllContacts() {
  return await Contact.find();
}
export async function getContactById(id) {
  return await Contact.findById(id);
}
