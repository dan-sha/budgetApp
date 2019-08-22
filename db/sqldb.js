const db = require('./index.js');
// const mysql = require('mysql');
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
        LEFT JOIN Bacnt ON t.BaccountId = Bacnt.id
        ORDER BY t.Bdate DESC;
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
      let catStr = `SELECT id FROM Bcateg
        WHERE Bcat = ("${budgetObj.Category}")`;
      let accStr = `SELECT id FROM Bacnt
        WHERE Baccount = ("${budgetObj["Account Name"]}")`;
      let query = `INSERT IGNORE INTO Bcateg (Bcat)
        VALUES("${budgetObj.Category}");
        INSERT IGNORE INTO Bacnt (Baccount)
        VALUES("${budgetObj["Account Name"]}");
        INSERT INTO budget (Bdate, Bdesc, Bamount, Btransaction, BcatId, BaccountId)
        VALUES("${budgetObj.Date}", "${budgetObj.Description}", ${budgetObj.Amount}, "${budgetObj["Transaction Type"]}", (${catStr}), (${accStr}));`;
      
        db.connection.query(query, [], (err, results) => {
          if (err) {
            console.log(err);
            callback(err);
          } else {
            callback(null, results);
          }
        });
    },

    deleteOne: function(id, callback) {
      let query = `DELETE FROM budget
        WHERE budget.id = ${id};`;
      db.connection.query(query, [], (err, results) => {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          callback(null, results);
        }
      });
    },

    putOne: function(obj, callback) {
      let query = ``;
      db.connection.query(query, [], (err, results) => {
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
