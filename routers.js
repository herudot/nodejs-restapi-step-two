const express = require('express');
const router = express.Router();

// GET method
router.get('/students', function(req, res){
  console.log('GET method');
  res.send('This is GET method request.');
});

// POST method
router.post('/student', function(req, res){
  console.log('POST method');
  res.send('This is POST method request.');
});

// PUT method
router.put('/student/:id', function(req, res){
  console.log('PUT method');
  res.send('This is PUT method request.');
});

// DELETE method

module.exports = router;
