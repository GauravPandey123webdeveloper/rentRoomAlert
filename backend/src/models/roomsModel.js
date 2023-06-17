const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amenities: [String],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  availableFrom: {
    type: Date,
    required: true,
  },
  availableTo: {
    type: Date,
    required: true,
  },
  reviewVideos: [
    {
      url: {
        type: String,
        required: true,
      },
      thumbnail: {
        type: String,
      },
    },
  ],
  reviewPhotos: [
    {
      url: {
        type: String,
        required: true,
      },
      caption: {
        type: String,
      },
    },
  ],
});

module.exports  = mongoose.model('Room', roomSchema);


