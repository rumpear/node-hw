const services = require('../../services');
const { createError } = require('../../utils/');
const { schemas } = require('../../models');

const updateFavorite = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { error } = schemas.favorite.validate(req.body);

    if (error) {
      throw createError(404, error.message);
    }

    const data = await services.updateStatusContact(contactId, req.body);

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

module.exports = updateFavorite;
