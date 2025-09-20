import {
  getAllContacts,
  getContactsById,
  createContact,
  updateContact,
  deleteContact,
} from '../services/contacts.js';
import createHttpError from 'http-errors';

export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactsByIdController = async (req, res, next) => {
  const { id } = req.params;

  const contact = await getContactsById(id);

  if (!contact) {
    return next(new createHttpError(404, `Contact not found!`));
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data: contact,
  });
};

export async function createContactController(req, res) {
  const contact = await createContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
}

export async function updateContactController(req, res, next) {
  const contact = await updateContact(req.params.id, req.body);

  if (!contact) {
    return next(new createHttpError(404, `Contact not found!`));
  }

  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: contact,
  });
}

export async function deleteContactController(req, res, next) {
  const { id } = req.params;

  const contact = await deleteContact(id);

  if (!contact) {
    return next(new createHttpError(404, `Contact not found!`));
  }

  res.json({ status: 200, message: 'Contact deleted successfully' });
}
