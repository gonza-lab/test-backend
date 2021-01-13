const User = require('../models/User');

const updateUserMiddleware = async (req, res, next) => {
  try {
    const { _id, email, ...newUser } = req.body;

    const userDB = await User.findOne({ _id: req.userDB._id });
    for (let prop in newUser) {
      userDB[prop] = newUser[prop];
    }
    if (newUser.password) userDB.encryptPassword();

    await userDB.save();
    req.userDB = userDB.toJSON();
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

module.exports = { updateUserMiddleware };
