import {
  createContact,
  deleteContact,
  getAllContacts,
  getContactsById,
  updateContact,
} from '../servises/contacts.js';
import createHttpError from 'http-errors';

export const getAllContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactsById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: ` Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const createNewContactController = async (req, res) => {
  const contact = await createContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact',
    data: contact,
  });
};
// ------------------

export const upsertContactController = async (req, res, next) => {
  const { contactId } = req.params;

  const reNewContact = await updateContact(contactId, req.body, {
    upsert: true,
  });

  if (!reNewContact) {
    next(createHttpError(404, "Contact not found (method 'PUT')"));
    return;
  }

  const status = reNewContact.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: `Successfully upserted a student!`,
    data: reNewContact.contact,
  });
};

// -----------------------

export const deleteContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await deleteContact(contactId);

  if (!contact) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  res.status(204).send();
};
