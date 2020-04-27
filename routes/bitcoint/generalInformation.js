const express = require('express');
const Router = express.Router();
const generalInfoBTC = require('../../controllers/bitcoin/generalInformation');

//General Information----

//getInfo
Router.get('/btc/info', generalInfoBTC.getInfo);
//getblockHash
Router.get('/btc/info/block/hash/:blockHash', generalInfoBTC.getBlockByHash);
//getBlockHeight
Router.get('/btc/info/block/height/:blockHeight', generalInfoBTC.getBlockByHeight);


module.exports = Router;