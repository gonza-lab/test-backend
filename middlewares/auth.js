const User = require('../models/User');

const authUserMiddleware = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userDB = await User.findOne({ email });

    if (!userDB.comparePassword(password)) {
      return res.status(400).json({
        ok: false,
        mgs: 'Contraseña o mail incorrecto.',
      });
    }

    req.userDB = { ...userDB.toJSON() };
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: true, msg: 'Hable con el administrador.' });
  }
};

const createUserMiddleware = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = new User({ firstName, lastName, email, password });
    user.encryptPassword();

    await user.save();

    req.userDB = { ...user.toJSON() };
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: 'Hable con el administrador.' });
  }
};

module.exports = { authUserMiddleware, createUserMiddleware };
