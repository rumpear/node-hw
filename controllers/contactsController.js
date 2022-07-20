const { nanoid } = require('nanoid');
const services = require('../services');
const contactAddEditScheme = require('../utils/');
const createError = require('../utils/');

const getAll = async (_, res, next) => {
  try {
    const data = await services.getAllContacts();
    res.status(200).json({ status: 'success', code: 200, data });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const data = await services.getContactById(contactId);

    if (!data) {
      throw createError(404);
    }

    res.status(200).json({ status: 'success', code: 200, data });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const data = await services.removeContact(contactId);

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
};

const add = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const { error } = contactAddEditScheme.validate(req.body);
    if (error) {
      throw createError(404, error.message);
    }

    const body = { id: nanoid(), name, email, phone };
    const data = await services.addContact(body);
    res.status(201).json({ status: 'success', code: 200, data });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { error } = contactAddEditScheme.validate(req.body);

    if (error) {
      throw createError(404, error.message);
    }

    const data = await services.updateContact(contactId, req.body);

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
};

module.exports = { getAll, getById, remove, add, update };
