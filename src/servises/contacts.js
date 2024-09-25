import { contactsModel } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await contactsModel.find();
  return contacts;
};

export const getContactsById = async (contactId) => {
  const contact = await contactsModel.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await contactsModel.create(payload);
  return contact;
};

// ----------------------
export const updateContact = async (contactId, payload, options = {}) => {
  const newContact = await contactsModel.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!newContact || !newContact.value) return null;

  return {
    contact: newContact.value,
    isNew: Boolean(newContact?.lastErrorObject?.upserted),
  };
};
// ---------------------------
export const deleteContact = async (contactId) => {
  const contact = await contactsModel.findOneAndDelete({
    _id: contactId,
  });
  return contact;
};
