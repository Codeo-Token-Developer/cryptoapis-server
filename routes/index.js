const express = require('express');
const Router = express.Router();

//liteCoin
Router.use(require('./litecoinRoute'));

//token
Router.use(require('./tokenRoute'));

//bitCoin
Router.use(require('./bitcoint'));

//ethereum
Router.use(require('./ethereumRoute'));

module.exports = Router;