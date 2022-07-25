const { User } = require('../../models');
const services = require('../../services');
const { createError } = require('../../utils');

const signup = async (req, res, next) => {
  try {
    // const { email } = req.body;
    // const user = await User.findOne({ email });
    // if (user) {
    //   throw createError(409, `Email ${email} in use`);
    // }

    const data = await services.signup(req.body, next);
    // const data = await services.signup(req.body);
    res.status(201).json({ status: 'success', code: 200, data });
  } catch (error) {
    next(error);
  }
};

module.exports = { signup };
