const mongoose = require('mongoose');
const tenantSchema = new mongoose.Schema({
  tenantName: {
    type: String,
    required: true,
    unique: true,
  },
  occupation:{
    type:String,
    requied:true
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  location: {
    type: String,
    required: true,
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

module.exports = mongoose.model('TenantCollection', tenantSchema);

 
