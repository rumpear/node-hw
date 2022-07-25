const { User } = require('../models');
// const { createError } = require('../utils');

const signup = async (body, next) => {
  try {
    // const { email } = body;
    // const user = await User.findOne({ email });
    // if (user) {
    //   throw createError(409, `Email ${email} in use`);
    // }

    const data = await User.create(body);
    return data;
  } catch (error) {
    console.log(error.message);
    // next(error);
  }
};

module.exports = { signup };
