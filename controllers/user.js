const userController = (req, res) => {
  try {
    res.json({ ok: true, user: req.userDB });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false });
  }
};

module.exports = { userController };
