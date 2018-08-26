var db = require('../db');


module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message, callback) {
      console.log(user);
      db.connection.query(`INSERT INTO messages () VALUES ('${user}')`, function(err, results, fields) {
        if (err) {
          console.log('ERROR: Post user to database failed!');
        } else {
          console.log('SUCCESS: Post user to database was successful!');
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user, callback) {
      console.log(user);
      db.connection.query(`INSERT INTO users (username) VALUES ('${user}')`, function(err, results, fields) {
        if (err) {
          console.log('ERROR: Post user to database failed!');
          console.log('ERR:', err);
          callback(err);
          return;
        } else {
          console.log('SUCCESS: Post user to database was successful!');
          console.log('FIELDS:', fields);
          console.log('RESULTS', results);
          callback(err, results);
        }
      });
    }
  }
};

