const { check } = require('express-validator');
const fieldValidator = require('../middlewares/fieldValidator');
const User = require('../models/User');

const existsPasswordValidator = check('password').isString();

const signUpValidators = [
  check('firstName').isString(),
  check('lastName').isString(),
  existsPasswordValidator,
  check('email').custom(async (email) => {
    const existEmail = await User.exists({ email });

    if (existEmail) {
      throw new Error('El email se encuentra ocupado');
    }
  }),
  fieldValidator,
];

const loginValidators = [
  existsPasswordValidator,
  check('email').custom(async (email) => {
    const existEmail = await User.exists({ email });

    if (!existEmail) {
      throw new Error('El email no se encuentra ocupado');
    }
  }),
  fieldValidator,
];

module.exports = { signUpValidators, loginValidators };
