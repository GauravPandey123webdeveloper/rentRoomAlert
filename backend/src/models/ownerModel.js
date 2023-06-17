const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  ownerName: {
    type: String,
    required: true,
    unique: true,
  },  
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
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
  aadharNumber: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('OwnerCollection', ownerSchema);

 
