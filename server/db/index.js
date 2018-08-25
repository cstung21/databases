var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
      host: 'http://127.0.0.1:3000/classes/users',
      user: 'student',
      password: 'student',
      database: 'chat'
    });
 
connection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});


module.exports = {
  connection: connection
};