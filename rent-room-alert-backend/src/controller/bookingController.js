const Booking = require('../models/bookingModel');

const createBooking = async function (req, res) {
  try {
    const { roomId, numberOfRoom,tenantId, startDate, endDate, payment } = req.body;

    const booking = await Booking.create({
      roomId,
      numberOfRoom,
      tenantId,
      startDate,
      endDate,
      payment,
    });

    res.status(200).send({ status: true, data: booking });
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

const getBookingById = async function (req, res) {
  try {
    const { bookingId } = req.params;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).send({ status: false, message: 'Booking not found' });
    }

    res.status(200).send({ status: true, data: booking });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const updateBooking = async function (req, res) {
  try {
    const { bookingId } = req.params;
    const updates = req.body;

    const booking = await Booking.findByIdAndUpdate(bookingId, updates, { new: true });

    if (!booking) {
      return res.status(404).send({ status: false, message: 'Booking not found' });
    }

    res.status(200).send({ status: true, data: booking });
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

const deleteBooking = async function (req, res) {
  try {
    const { bookingId } = req.params;

    const booking = await Booking.findByIdAndDelete(bookingId);

    if (!booking) {
      return res.status(404).send({ status: false, message: 'Booking not found' });
    }

    res.status(200).send({ status: true, data: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { createBooking, getBookingById, updateBooking, deleteBooking };
