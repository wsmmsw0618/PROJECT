const express = require('express');
const profileRouter = require('./profile');
const highlineRouter = require('./highline');
const messageRouter = require('./message');
const requestRouter = require('./request');
const cardsRouter = require('./cards');
//create router
const router = express.Router();

router.use('/profile',profileRouter);
router.use('/highline',highlineRouter);
router.use('/message',messageRouter);
router.use('/request',requestRouter);
router.use('/cards',cardsRouter);
module.exports = router