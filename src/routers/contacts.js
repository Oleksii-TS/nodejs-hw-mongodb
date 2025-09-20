import { Router } from 'express';
import {
  getContactsController,
  getContactsByIdController,
  createContactController,
  updateContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:id', ctrlWrapper(getContactsByIdController));
router.post('/contacts', ctrlWrapper(createContactController));
router.patch('/contacts/:id', ctrlWrapper(updateContactController));
router.delete('/contacts/:id', ctrlWrapper(deleteContactController));

export default router;
