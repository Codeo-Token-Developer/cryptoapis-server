const express = require('express');
const Router = express.Router();

//Get Info;
Router.use('/btc', require('./generalInformation'));

//Transaction
Router.use('/btc', require('./transaction'));


module.exports = Router;