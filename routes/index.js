const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const messageController = require('../controllers/messageController');

// Middleware to log the request details
router.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Routes
router.get('/', mainController.getAllData);
router.post('/21110164/:id', mainController.addMember);
router.get('/21110164/:id', mainController.getMemberById);
router.get('/message/:id', messageController.getMessageHaveID);
router.get('/message',messageController.getMessageNoID);

module.exports = router;

