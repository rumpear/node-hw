const { Schema, model } = require('mongoose');
const Joi = require('joi');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      unique: [true, 'email must be unique'],
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().required(),
});

const selectFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = { add: addSchema, favorite: selectFavoriteSchema };

const Contact = model('contacts', contactSchema);

module.exports = { schemas, Contact };

// E11000 duplicate key error collection: contacts_app.contacts index: email_1 dup key: { email: "roman.f.grusha.com" }
