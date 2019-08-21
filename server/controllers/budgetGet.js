const { budget } = require('../../db/sqldb.js');

module.exports = {
  getAll: (req, res) => {
    budget.get((err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Get All good');
        res.status(200).send(results);
      }
    }); 
  }
}