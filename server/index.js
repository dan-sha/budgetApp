const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const axios = require('axios');


const app = express();


// Middleware
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

// Routes
const budgetRoutes = require('./routes/budgetRoutes.js');
app.use('/', budgetRoutes);


app.listen(3000, function() {
    console.log('listening on port 3000!');
});