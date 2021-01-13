const createJWT = require('../helpers/createJWT');
const User = require('../models/User');

const authController = async (req, res) => {
  try {
    const token = await createJWT(req.userDB);
    res.json({ ok: true, user: req.userDB, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'Hable con el administrador' });
  }
};

module.exports = { authController };
