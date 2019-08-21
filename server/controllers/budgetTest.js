const { budget } = require('../../db/sqldb.js');
const sample = require('../../data/sample.js');

module.exports = {
  resetTables: (req, res) => {
    let delTableData = sample.deleteTables();
    budget.test(delTableData, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Delete table error');
      } else {
        console.log('Tables Cleared');
        let createTable = sample.createTables();
        budget.test(createTable, (err, results) => {
          if (err) {
            console.log(err);
            res.status(500).send('Create table error');
          } else {
            console.log('Tables Created');
            res.status(200).send('Created');
          }
        });
      }
    });
  },

  fillTables: (req, res) => {
    let fillTableData = sample.fillTables();
    budget.test(fillTableData, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Tables Filled');
        res.status(200).send('Filled');
      }
    });
  }
}
