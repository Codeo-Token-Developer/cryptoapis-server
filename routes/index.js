const express = require('express');
const Router = express.Router();

//liteCoin
Router.use(require('./litecoinRoute'));

//token
Router.use(require('./tokenRoute'));

//bitCoin
Router.use(require('./bitcoinRoute'));

//ethereum
Router.use(require('./ethereumRoute'));

module.exports = Router;