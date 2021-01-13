const { Router } = require('express');
const { userController } = require('../controllers/user');
const { deleteUserMiddleware } = require('../middlewares/deleteUser');
const { getUserMiddleware } = require('../middlewares/getUser');
const { jwtValidator } = require('../middlewares/jwtValidator');
const { updateUserMiddleware } = require('../middlewares/updateUser');

const route = new Router();
/* /api/user/... */

route.use(jwtValidator);

route.get('/', [getUserMiddleware], userController);
route.put('/', [updateUserMiddleware], userController);
route.delete('/', [deleteUserMiddleware], userController);

module.exports = route;
