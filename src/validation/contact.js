import Joi from 'joi';
import { isValidObjectId } from 'mongoose';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least {#limit} characters',
    'string.max': 'Name must be at most {#limit} characters',
    'any.required': 'Name is required',
  }),

  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number must be a string',
    'string.empty': 'Phone number is required',
    'string.min': 'Phone number must be at least {#limit} characters',
    'string.max': 'Phone number must be at most {#limit} characters',
    'any.required': 'Phone number is required',
  }),

  email: Joi.string()
    .min(3)
    .max(50)
    .email({ tlds: { allow: false } })
    .messages({
      'string.base': 'Email must be a string',
      'string.email': 'Email must be a valid email address',
      'string.min': 'Email must be at least {#limit} characters',
      'string.max': 'Email must be at most {#limit} characters',
    }),

  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be a boolean',
  }),

  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'any.only': 'Contact type must be one of work, home, or personal',
      'string.empty': 'Contact type is required',
      'any.required': 'Contact type is required',
    }),
  userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message('Parent id should be a valid mongo id');
    }
    return true;
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least {#limit} characters',
    'string.max': 'Name must be at most {#limit} characters',
  }),

  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone number must be a string',
    'string.min': 'Phone number must be at least {#limit} characters',
    'string.max': 'Phone number must be at most {#limit} characters',
  }),

  email: Joi.string()
    .min(3)
    .max(50)
    .email({ tlds: { allow: false } })
    .messages({
      'string.base': 'Email must be a string',
      'string.email': 'Email must be a valid email address',
      'string.min': 'Email must be at least {#limit} characters',
      'string.max': 'Email must be at most {#limit} characters',
    }),

  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be a boolean',
  }),

  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only': 'Contact type must be one of work, home, or personal',
  }),
  userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message('Parent id should be a valid mongo id');
    }
    return true;
  }),
});
