const { Schema, model } = require('mongoose');
const Joi = require('joi');

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    // token: {
    //   type: String,
    //   default: null,
    // },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user',
    // },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
  subscription: Joi.string().required(),
  //   token: Joi.string().required(),
  //   owner: Joi.object().required(),
});

const User = model('user', userSchema);

module.exports = { joiSchema, User };
