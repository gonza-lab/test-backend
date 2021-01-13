const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.methods.encryptPassword = function () {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
};

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.method('toJSON', function () {
  const { __v, password, ...object } = this.toObject();
  return object;
});

module.exports = model('User', UserSchema);
