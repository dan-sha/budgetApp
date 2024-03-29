const mysql = require("mysql");
const { sqlUri } = require("./config.js");

const connection = mysql.createConnection({
  host: "localhost",
  user: "student",
  password: "student",
  database: "budget",
  multipleStatements: true
});

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL");
  }
});

let createDB = `CREATE DATABASE IF NOT EXISTS budget`;

let createTable = `CREATE TABLE IF NOT EXISTS budget (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    Bdate CHAR(25),
    Bdesc VARCHAR(500),
    Bamount DECIMAL(12,2),
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
    Bcat CHAR(50),
    UNIQUE KEY(Bcat)
);`;
let createAcc = `CREATE TABLE IF NOT EXISTS Bacnt (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Baccount CHAR(50),
    UNIQUE KEY(Baccount)
);`;

connection.query(createDB, [], (err, results) => {
  if (err) {
    console.log('DB Creation error');
    console.log(err);
  } else {
    console.log('DB created');
  }
});

connection.query(createAcc, [], (err, results) => {
  if (err) {
    console.log("Table creation error");
    console.log(err);
  } else {
    console.log("Table thing good");
  }
});
connection.query(createCat, [], (err, results) => {
  if (err) {
    console.log("Table creation error");
    console.log(err);
  } else {
    console.log("Table thing good");
  }
});
connection.query(createTable, [], (err, results) => {
  if (err) {
    console.log("Table creation error");
    console.log(err);
  } else {
    console.log("Table thing good");
  }
});

exports.connection = connection;
