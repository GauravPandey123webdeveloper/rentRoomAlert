const Owner = require('../models/ownerModel');

const registerOwner = async function (req, res) {
  try {
    const { ownerName, userId, email, password, phoneNumber, aadharNumber, profilePicture } = req.body;

    const owner = await Owner.create({
      ownerName,
      userId,
      email,
      password,
      phoneNumber,
      aadharNumber,
      profilePicture,
    });

    res.status(200).send({ status: true, data: owner });
  } catch(err){
    if(err.message.includes('validation')){
      return res.status(400).send({status:false,message:err.message})
    }
    else if(err.message.includes('duplicate')){
     return  res.status(400).send({status:false,message:err.message})
    }
    else{
      return res.status(400).send({status:false,message:err.message})
    }
    
  }
};

const getOwnerById = async function (req, res) {
  try {
    const { ownerId } = req.params;

    const owner = await Owner.findById(ownerId);

    if (!owner) {
      return res.status(404).send({ status: false, message: 'Owner not found' });
    }

    res.status(200).send({ status: true, data: owner });
  } catch(err){
    if(err.message.includes('validation')){
      return res.status(400).send({status:false,message:err.message})
    }
    else if(err.message.includes('duplicate')){
     return  res.status(400).send({status:false,message:err.message})
    }
    else{
      return res.status(400).send({status:false,message:err.message})
    }
    
  }
};

const updateOwner = async function (req, res) {
  try {
    const { ownerId } = req.params;
    const updates = req.body;

    const owner = await Owner.findByIdAndUpdate(ownerId, updates, { new: true });

    if (!owner) {
      return res.status(404).send({ status: false, message: 'Owner not found' });
    }

    res.status(200).send({ status: true, data: owner });
  } catch(err){
    if(err.message.includes('validation')){
      return res.status(400).send({status:false,message:err.message})
    }
    else if(err.message.includes('duplicate')){
     return  res.status(400).send({status:false,message:err.message})
    }
    else{
      return res.status(400).send({status:false,message:err.message})
    }
    
  }
};

const deleteOwner = async function (req, res) {
  try {
    const { ownerId } = req.params;

    const owner = await Owner.findByIdAndDelete(ownerId);

    if (!owner) {
      return res.status(404).send({ status: false, message: 'Owner not found' });
    }

    res.status(200).send({ status: true, data: 'Owner deleted successfully' });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { registerOwner, getOwnerById, updateOwner, deleteOwner };
