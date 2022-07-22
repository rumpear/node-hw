const services = require('../../services');

const getAll = async (_, res, next) => {
  try {
    const data = await services.getAllContacts();
    res.status(200).json({ status: 'success', code: 200, data });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
