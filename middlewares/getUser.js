const User = require('../models/User');

const getUserMiddleware = async (req, res, next) => {
  try {
    const userDB = await User.findById(req.userDB._id);

    req.userDB = userDB.toJSON();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: 'Hable con el administrador.' });
  }
  next();
};

module.exports = { getUserMiddleware };
