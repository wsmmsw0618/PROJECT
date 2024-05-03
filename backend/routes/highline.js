const express = require('express');
const {getHighline} = require('../controllers/highlineController');
const highlineController = express.Router();
highlineController.get('/',getHighline);

module.exports = highlineController;