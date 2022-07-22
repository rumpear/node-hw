const services = require('../../services');
const { createError } = require('../../utils/');
const { schemas } = require('../../models');

const add = async (req, res, next) => {
  try {
    const { error } = schemas.add.validate(req.body);
    if (error) {
      throw createError(404, error.message);
    }

    const data = await services.addContact(req.body);
    res.status(201).json({ status: 'success', code: 200, data });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
