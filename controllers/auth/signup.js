const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const services = require('../../services');
const { createError } = require('../../utils');

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw createError(409, `Email ${email} in use`);
    }

    const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    // const data = await services.signup(req.body, next);
    const data = await services.signup({
      ...req.body,
      password: hashPass,
    });

    res.status(201).json({ status: 'success', code: 200, data });
  } catch (error) {
    next(error);
  }
};

module.exports = { signup };
