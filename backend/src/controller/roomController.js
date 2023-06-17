const Room = require('../models/roomModel');

const createRoom = async function (req, res) {
  try {
    const {
      title,
      category,
      description,
      location,
      price,
      amenities,
      ownerId,
      availableFrom,
      availableTo,
      reviewVideos,
      reviewPhotos,
    } = req.body;

    const room = await Room.create({
      title,
      category,
      description,
      location,
      price,
      amenities,
      ownerId,
      availableFrom,
      availableTo,
      reviewVideos,
      reviewPhotos,
    });

    res.status(200).send({ status: true, data: room });
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

const getRoomById = async function (req, res) {
  try {
    const { roomId } = req.params;

    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).send({ status: false, message: 'Room not found' });
    }

    res.status(200).send({ status: true, data: room });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const updateRoom = async function (req, res) {
  try {
    const { roomId } = req.params;
    const updates = req.body;

    const room = await Room.findByIdAndUpdate(roomId, updates, { new: true });

    if (!room) {
      return res.status(404).send({ status: false, message: 'Room not found' });
    }

    res.status(200).send({ status: true, data: room });
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

const deleteRoom = async function (req, res) {
  try {
    const { roomId } = req.params;

    const room = await Room.findByIdAndDelete(roomId);

    if (!room) {
      return res.status(404).send({ status: false, message: 'Room not found' });
    }

    res.status(200).send({ status: true, data: 'Room deleted successfully' });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { createRoom, getRoomById, updateRoom, deleteRoom };
