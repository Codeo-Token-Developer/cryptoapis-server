if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV === 'development') {
    require('dotenv').config();
};

const express = require('express');
const app = express();
const http = require('http');
const Io = require('socket.io')(http.createServer(app));
const cors = require('cors');
const PORT = process.env.PORT;

//app.use
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//app.use Io
app.use((req,res,next) => {
    req.Io = Io;
    next();
})


//app.use route
app.use(require('./routes/index'));

//errHandler
app.use(require('./middlewares/errHandler'));


app.listen(PORT, () => console.log(`Server started on ${PORT}`));

