const express = require('express');
const router = express.Router();
const Students = require('./models/students');

// GET method
router.get('/students', function(req, res){
  console.log('GET method');
  res.send('This is GET method request.');
});

// POST method
router.post('/student', function(req, res, next){
  // Saving data student into mongodb
  Students.create(req.body).then(function(result){
    res.send(result);
  }).catch(next);
});

// PUT method
router.put('/student/:id', function(req, res){
  console.log('PUT method');
  res.send('This is PUT method request.');
});

// DELETE method

module.exports = router;
