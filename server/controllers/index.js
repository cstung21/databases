var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = req.body[''];
      console.log('yoyoyoyoyo here is the req.body', req.body)
      models.users.post(user, (err, success) => {
        if (err) {
          console.log('ERROR: Post user request failed')
        } else {
          console.log('SUCCESS: Post user request was successful!')
        }
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    
    post: function (req, res) {
      var user = req.body['username'];
      models.users.post(user, (err, success) => {
        if (err) {
          console.log('ERROR: Post user request failed')
        } else {
          console.log('SUCCESS: Post user request was successful!')
        }
      });
    }
  }
};

