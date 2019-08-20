const mysql = require('mysql');
const { sqlUri } = require('./config.js');

// const connection = mysql.createConnection(sqlUri);
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'budget'
});

connection.connect((err) => {
  console.log('1234');
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to PostGres');
  }
});

let createTable = `CREATE TABLE IF NOT EXISTS budget (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    Bdate CHAR(25),
    Bdesc VARCHAR(500),
    Bamount CHAR(10),
    Btransaction CHAR(50),
    Bcat CHAR(50),
    Baccount CHAR(50)
);`;

connection.query(createTable, [], (err, results) => {
  if (err) {
    console.log('Table creation error');
    console.log(err);
  } else {
    console.log('Table thing good');
  }
})

exports.connection = connection;