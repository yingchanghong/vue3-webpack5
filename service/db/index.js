const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  // port: 3306,
  user: 'root',
  password: 'ych1999320',
  database: 'vue3',
});
connection.connect();
module.exports = connection;
