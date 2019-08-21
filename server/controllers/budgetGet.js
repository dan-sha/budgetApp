const { budget } = require('../../db/sqldb.js');
const format = require('../Helpers/format.js');

module.exports = {
  getAll: (req, res) => {
    budget.get('budget', (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error getting from db.');
      } else {
        let formatRes = format.mainList(results);
        res.status(200).send(formatRes);
      }
    }); 
  },
  getCat: (req, res) => {
    budget.get('Bcateg', (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error getting from db.');
      } else {
        res.status(200).send(results);
      }
    });
  },
  getAcc: (req, res) => {
    budget.get('Bacnt', (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error getting from db.');
        } else {
          res.status(200).send(results);
        }
      });
  }
}