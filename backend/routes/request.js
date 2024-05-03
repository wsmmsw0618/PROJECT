const express = require('express');
const requestRouter = express.Router();
const{getRequest} = require('../controllers/requestController');
requestRouter.get('/',getRequest);
module.exports = requestRouter;