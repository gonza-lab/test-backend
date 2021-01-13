const { Router } = require('express');
const { authController } = require('../controllers/auth');
const {
  authUserMiddleware,
  createUserMiddleware,
} = require('../middlewares/auth');
const { getUserMiddleware } = require('../middlewares/getUser');
const { jwtValidator } = require('../middlewares/jwtValidator');
const {
  signUpValidators,
  loginValidators,
} = require('../validators/authValidators');

/* api/auth/... */

const route = new Router();

route.post(
  '/signup',
  [...signUpValidators, createUserMiddleware],
  authController
);
route.post('/login', [...loginValidators, authUserMiddleware], authController);
route.get('/token', [jwtValidator, getUserMiddleware], authController);

module.exports = route;
