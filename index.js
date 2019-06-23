const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers');
const app = express();

app.use(bodyParser.json());
app.use('/api',routers);

app.listen( process.env.port || 5000, function(req, res){
  console.log('Express server started !');
});
