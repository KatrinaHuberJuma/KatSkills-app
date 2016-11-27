var db = require('../db');


// controllers call models to do sql, return results

module.exports = {

  foods: {
    get: function (callback) {
      // fetch all foods
      // text, username, roomname, id
      console.log("models/index foods.get is alive");
      var queryStr = 'select * from food';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a message for a user id based on the given username TODO proper names
      var queryStr = 'insert into foods(text, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },


  ratings: {
    get: function (callback) {
      //params = {food: "cake"};
      console.log("ratings.getForFood alive, params..");
      // fetch all foods
      // text, username, roomname, id
      // var queryStr = 'SELECT * FROM ratings where food =  \"' + params.food + '\"';
      var queryStr = 'SELECT * FROM ratings';

      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    }
    
  }

};

