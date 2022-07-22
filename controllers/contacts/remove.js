const services = require('../../services');
const { createError } = require('../../utils/');

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

module.exports = remove;
