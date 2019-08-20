const db = require('./index.js');
const mysql = require('mysql');
const {sqlUri} = require('./config');

module.exports = {

  budget: {
    get: function(callback) {
      let queryStr = 'SELECT * FROM budget';
      console.log(sqlUri);
      db.connection.query(queryStr, [], (err, results) => {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          callback(null, results);
        }
      });
    }

  }
}