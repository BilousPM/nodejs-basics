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
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const contactsRouters = Router();
contactsRouters.use('/:contactId', isValidId('contactId'));

contactsRouters.get('/', ctrlWrapper(getAllContactsController));
contactsRouters.get('/:contactId', ctrlWrapper(getContactByIdController));

contactsRouters.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createNewContactController),
);

contactsRouters.put(
  '/:contactId',
  validateBody(createContactSchema),
  ctrlWrapper(upsertContactController),
);

contactsRouters.patch(
  '/:contactId',
  validateBody(updateContactSchema),
  ctrlWrapper(putchContactController),
);

contactsRouters.delete('/:contactId', ctrlWrapper(deleteContactByIdController));

export default contactsRouters;
