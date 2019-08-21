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

    get: function(str, callback) {
      let queryStr = '';
      if (str === 'budget') {
        queryStr = `
        SELECT t.*, Bacnt.Baccount 
        FROM (SELECT budget.*, Bcateg.Bcat 
        FROM budget LEFT JOIN Bcateg ON budget.BcatId = Bcateg.id) t 
        LEFT JOIN Bacnt ON t.BaccountId = Bacnt.id;
        `;
      } else {
        queryStr = 'SELECT * FROM ' +  str;
      }
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
