const express = require('express');
const Router = express.Router();
const BTC = require('../controllers/bitcoinController');

//Information----

//getInfo
Router.get('/btc/info', BTC.getInfo);
//getblockHash
Router.get('/btc/info/block/hash/:blockHash', BTC.getBlockByHash);
//getBlockHeight
Router.get('/btc/info/block/height/:blockHeight', BTC.getBlockByHeight);



module.exports = Router;