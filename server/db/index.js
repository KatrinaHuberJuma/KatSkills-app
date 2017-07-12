var mysql = require('mysql');
// this is a mysql app. mysql must be running? 

var connection = mysql.createConnection({
// 					   method from mysql, takes an obj as an argument
  user: 'root',
  password: 'juma',
  database: 'KatSkills'
  // I guess all my dbs live in a specific folder where the program already knows to look 
  // and so we can refer to this database by name
});

connection.connect();

module.exports = connection;
// required by models/index.html


