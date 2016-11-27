var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: 'posey3861',
  database: 'foodratingsp'
});

connection.connect();

module.exports = connection;


