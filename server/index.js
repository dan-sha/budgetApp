const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const axios = require('axios');
const { budget } = require('../db/sqldb.js');
const sample = require('../data/sample.js');


const app = express();


// Middleware
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/test/table/clear/tables', (req, res) => {
  let delTableData = sample.deleteTables();
  budget.test(delTableData, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Tables Cleared');
      res.status(200).send('Cleared');
    }
  });
});
app.get('/test/table/fill/tables', (req, res) => {
  let fillTableData = sample.fillTables();
  budget.test(fillTableData, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Tables Filled');
      res.status(200).send('Filled');
    }
  })
})

app.get('/test', (req, res) => {
  let fillTableData = sample.fillTables();
  res.status(200).send(fillTableData);
//   budget.test((err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('postgres worked');
//       res.status(200).send(results);
//     }
//   });
});

app.listen(3000, function() {
    console.log('listening on port 3000!');
});