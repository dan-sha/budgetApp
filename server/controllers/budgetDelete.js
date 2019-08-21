const { budget } = require('../../db/sqldb.js');

module.exports = {
  deleteOne: (req, res) => {
    budget.deleteOne(req.params.id, (err, results) => {
      if (err) {
        console.log('MySQL delete error');
        res.status(500).send('Delete error');
      } else {
        res.status(202).send(results);
      }
    });
  }
}