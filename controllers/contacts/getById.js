const services = require('../../services');
const { createError } = require('../../utils/');

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

module.exports = getById;
