const User = require('../models/User');

const deleteUserMiddleware = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.userDB._id);
    req.userDB = {};
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: 'Hable con el administrador' });
  }
};

module.exports = { deleteUserMiddleware };
