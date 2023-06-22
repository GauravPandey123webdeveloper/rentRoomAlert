const express = require('express');
const signUp = require('../controller/signUpController');
const ownerController = require('../controller/ownerController');
const tenantController = require('../controller/tenantController');
const chatController = require('../controller/chatController');
const bookingController = require('../controller/bookingController');
const authenticationController = require('../authentication/authenticationController');
const roomController = require('../controller/roomController');
const reviewController = require('../controller/reviewController');

const router = express.Router();

// Demo route for testing
router.post('/roomForm', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// User sign-up route
router.post('/signUp', signUp.registerUser);

// Delete user route
router.put('/deleteUser', signUp.deleteUser);

// Permanent delete user route
router.delete('/permanentDeleteUser', signUp.permanentDeleteUser);

// Create owner route
router.post('/owners', ownerController.registerOwner);

// Get owner by ID route
router.get('/owners/:ownerId', ownerController.getOwnerById);

// Update owner route
router.put('/owners/:ownerId', ownerController.updateOwner);

// Delete owner route
router.delete('/owners/:ownerId', ownerController.deleteOwner);

// Create tenant route
router.post('/tenants', tenantController.registerTenant);

// Get tenant by ID route
router.get('/tenants/:tenantId', tenantController.getTenantById);

// Update tenant route
router.put('/tenants/:tenantId', tenantController.updateTenant);

// Delete tenant route
router.delete('/tenants/:tenantId', tenantController.deleteTenant);

// Create chat route
router.post('/chats', chatController.createChat);

// Get chat by ID route
router.get('/chats/:chatId', chatController.getChatById);

// Update chat route
router.put('/chats/:chatId', chatController.updateChat);

// Delete chat route
router.delete('/chats/:chatId', chatController.deleteChat);

// Create booking route
router.post('/bookings', bookingController.createBooking);

// Get booking by ID route
router.get('/bookings/:bookingId', bookingController.getBookingById);

// Update booking route
router.put('/bookings/:bookingId', bookingController.updateBooking);

// Delete booking route
router.delete('/bookings/:bookingId', bookingController.deleteBooking);

// Create room route
router.post('/rooms', roomController.createRoom);

// Get room by ID route
router.get('/rooms/:roomId', roomController.getRoomById);

// Update room route
router.put('/rooms/:roomId', roomController.updateRoom);

// Delete room route
router.delete('/rooms/:roomId', roomController.deleteRoom);

// Create review route
router.post('/reviews', reviewController.createReview);

// Get review by ID route
router.get('/reviews/:reviewId', reviewController.getReviewById);

// Update review route
router.put('/reviews/:reviewId', reviewController.updateReview);

// Delete review route
router.delete('/reviews/:reviewId', reviewController.deleteReview);

// Authentication middleware route
router.use(authenticationController.authentication);

// Authorization middleware route
router.use(authenticationController.authorisation);

module.exports = router;
