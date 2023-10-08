const express = require('express');
const contactRouter = express.Router();
const createContact = require('../controllers/ContactController.js'); 



// Post
contactRouter.post('/', createContact);

module.exports = contactRouter;
