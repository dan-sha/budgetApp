const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const axios = require('axios');
const { budget }= require('../db/sqldb.js');


const app = express();


// Middleware
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/test', (req, res) => {
  budget.get((err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('postgres worked');
      console.log(results);
    }
  });
  console.log('hi');
  res.status(200).send('IT WORKED');
});

app.listen(3000, function() {
    console.log('listening on port 3000!');
});