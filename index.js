const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers');
const app = express();
const mongoose = require('mongoose');

// DB Connection
mongoose.connect('mongodb://localhost:27017/sinau-nodejs', {useNewUrlParser: true, useFindAndModify: false});
mongoose.Promise = global.Promise;

// Implementation of body-parser
app.use(bodyParser.json());

// Implementation of express router which created before
app.use('/api',routers);

app.listen( process.env.port || 5000, function(req, res){
  console.log('Express server started !');
});
