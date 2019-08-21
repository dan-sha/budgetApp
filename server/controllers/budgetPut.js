const { budget } = require('../../db/sqldb.js');

module.exports = {
  updateOne: (req, res) => {
    console.log(req.params.id);
  }
}