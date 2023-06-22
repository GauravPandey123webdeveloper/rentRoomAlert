const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });
module.exports = mongoose.model('UserCollection', userSchema);


