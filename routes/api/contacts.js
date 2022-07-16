const express = require('express');
const Joi = require('joi');
const { nanoid } = require('nanoid');

const contacts = require('../../models/contacts.js');
const createError = require('../../utils/createError.js');

const router = express.Router();

const contactAddEditScheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

router.get('/', async (_, res, next) => {
  try {
    const data = await contacts.listContacts();
    res.status(200).json({ status: 'success', code: 200, data });
  } catch (error) {
    next(error);
  }
});

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const data = await contacts.getContactById(contactId);

    if (!data) {
      throw createError(404);
    }

    res.status(200).json({ status: 'success', code: 200, data });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const { error } = contactAddEditScheme.validate(req.body);
    if (error) {
      throw createError(404, error.message);
    }

    const body = { id: nanoid(), name, email, phone };
    const data = await contacts.addContact(body);
    res.status(201).json({ status: 'success', code: 200, data });
  } catch (error) {
    next(error);
  }
});

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const data = await contacts.removeContact(contactId);

    if (!data) {
      throw createError(404);
    }

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'contact deleted',
      data,
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { error } = contactAddEditScheme.validate(req.body);

    if (error) {
      throw createError(404, error.message);
    }

    const data = await contacts.updateContact(contactId, req.body);

    if (!data) {
      throw createError(404);
    }

    res.status(200).json({
      status: 'success',
      code: 200,
      data,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
