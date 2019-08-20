const db = require('./index.js');
const mysql = require('mysql');
const {sqlUri} = require('./config');

module.exports = {

  budget: {
    test: function(query, callback) {
      db.connection.query(query, [], (err, results) => {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          callback(null, results);
        }
      });
    },

    get: function(callback) {
      let queryStr = 'SELECT * FROM budget';
      db.connection.query(queryStr, [], (err, results) => {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          callback(null, results);
        }
      });
    },
    getCategories: function(callback) {
      let queryStr = 'SELECT * FROM Bcateg';
      db.connection.query(queryStr, [], (err, results) => {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          callback(null, results);
        }
      });
    },
    getAccounts: function(callback) {
      let queryStr = 'SELECT * FROM Bacnt';
      db.connection.query(queryStr, [], (err, results) => {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          callback(null, results);
        }
      });
    },

    addOne: function(budgetObj, callback) {
      callback(null);
    }

  }
}