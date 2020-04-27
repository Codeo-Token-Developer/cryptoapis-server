const axios = require('axios');
const baseUrl = process.env.BASE_URL;
const NETWORK = process.env.NETWORK;
const API_KEY = process.env.API_KEY;
//=======================================================
     exports.getInfo = (req,res,next) => {
        console.log('Masuk getInfo')
        axios({
            url: `${baseUrl}/v1/bc/btc/${NETWORK}/info`,
            method: 'GET',
            headers: {
                'ContentType': 'application/json',
                'X-API-KEY': API_KEY
            }
        })
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err);
        })
    };

    exports.getBlockByHash = (req,res,next) => {
        let BLOCK_HASH = req.params.blockHash;
        axios({
            url: `${baseUrl}/v1/bc/btc/${NETWORK}/blocks/${BLOCK_HASH}`,
            method: 'GET',
            headers: {
                'ContentType': 'application/json',
                'X-API-KEY': API_KEY
            }
        })
        .then(({data}) => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
        })
    };

    // Get Block by Height
    exports.getBlockByHeight = (req,res,next) => {
        axios({
            url: '',
            method: 'GET',
            headers: {
                'ContentType': 'application/json',
                'X-API-KEY': API_KEY
            }
        })
        .then(({data}) => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
        })
    };





