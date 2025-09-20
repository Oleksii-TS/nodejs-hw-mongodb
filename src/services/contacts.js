import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactsById = async (id) => {
  const contact = await ContactsCollection.findById(id);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const updateContact = async (studentId, payload) => {
  const contact = await ContactsCollection.findByIdAndUpdate(
    studentId,
    payload,
    {
      new: true,
    },
  );
  return contact;
};

export const deleteContact = async (id) => {
  const contact = await ContactsCollection.findByIdAndDelete(id);
  return contact;
};
