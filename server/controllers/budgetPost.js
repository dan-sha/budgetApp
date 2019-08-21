const { budget } = require('../../db/sqldb.js');
const format = require('../Helpers/format.js');

module.exports = {
  addEntry: (req, res) => {
    budget.addOne(req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('db insert error');
      } else {
        res.status(201).send('Entry added');
      }
    });
  }
}