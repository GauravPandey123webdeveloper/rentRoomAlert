const Review = require('../models/reviewModel');

const createReview = async function (req, res) {
  try {
    const { room, user, rating, comment } = req.body;

    const review = await Review.create({
      room,
      user,
      rating,
      comment,
    });

    res.status(200).send({ status: true, data: review });
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

const getReviewById = async function (req, res) {
  try {
    const { reviewId } = req.params;

    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).send({ status: false, message: 'Review not found' });
    }

    res.status(200).send({ status: true, data: review });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const updateReview = async function (req, res) {
  try {
    const { reviewId } = req.params;
    const updates = req.body;

    const review = await Review.findByIdAndUpdate(reviewId, updates, { new: true });

    if (!review) {
      return res.status(404).send({ status: false, message: 'Review not found' });
    }

    res.status(200).send({ status: true, data: review });
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

const deleteReview = async function (req, res) {
  try {
    const { reviewId } = req.params;

    const review = await Review.findByIdAndDelete(reviewId);

    if (!review) {
      return res.status(404).send({ status: false, message: 'Review not found' });
    }

    res.status(200).send({ status: true, data: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { createReview, getReviewById, updateReview, deleteReview };
