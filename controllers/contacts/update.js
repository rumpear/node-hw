const services = require('../../services');
const { createError } = require('../../utils/');
const { joiAddSchema } = require('../../models/contact');

const update = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { error } = joiAddSchema.validate(req.body);

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

module.exports = update;
