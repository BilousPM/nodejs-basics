import { Router } from 'express';
import {
  createNewContactController,
  deleteContactByIdController,
  getAllContactsController,
  getContactByIdController,
  putchContactController,
  upsertContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const contactsRouters = Router();

contactsRouters.get('/', ctrlWrapper(getAllContactsController));

contactsRouters.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);

contactsRouters.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createNewContactController),
);

// -----------------------------
contactsRouters.put('/:contactId', ctrlWrapper(upsertContactController));
// -------------------

contactsRouters.patch('/:contactId', ctrlWrapper(putchContactController));

contactsRouters.delete('/:contactId', ctrlWrapper(deleteContactByIdController));

export default contactsRouters;
