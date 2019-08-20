const mysql = require('mysql');
const { sqlUri } = require('./config.js');

// const connection = mysql.createConnection(sqlUri);
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'budget',
  multipleStatements: true
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
    BcatId INT,
    BaccountId INT,
    FOREIGN KEY (BcatId)
    REFERENCES Bcateg (id),
    FOREIGN KEY (BaccountId)
    REFERENCES Bacnt (id)
);`;
let createCat = `CREATE TABLE IF NOT EXISTS Bcateg (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Bcat CHAR(50)
);`;
let createAcc = `CREATE TABLE IF NOT EXISTS Bacnt (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Baccount CHAR(50)
);`;

connection.query(createAcc, [], (err, results) => {
  if (err) {
    console.log('Table creation error');
    console.log(err);
  } else {
    console.log('Table thing good');
  }
});
connection.query(createCat, [], (err, results) => {
    if (err) {
      console.log('Table creation error');
      console.log(err);
    } else {
      console.log('Table thing good');
    }
  });
  connection.query(createTable, [], (err, results) => {
    if (err) {
      console.log('Table creation error');
      console.log(err);
    } else {
      console.log('Table thing good');
    }
  });

exports.connection = connection;