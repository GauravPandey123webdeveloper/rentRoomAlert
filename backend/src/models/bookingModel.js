const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RoomCollection',
    required: true,
  },
  tenantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tenantCollection',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  payment: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('BookingCollection', bookingSchema);


