var db = require('../db');


// controllers call models to do sql, return results

module.exports = {
// module.exports makes this object, with all it's sub objects and their methods, 
// available to other files, in this case /controllers/index.html

  foods: {
    get: function (callback) {
      console.log("server/models/index foods.get is being called to select all foods in the food table");
      var queryStr = 'select * from food';
      // this string makes a sql call
      db.query(queryStr, function(err, results) {
      // query is a method on the database object we required in,
      // query method must come from mysql because it is not defined in the file
        callback(err, results);  // this returns the results (from db) to controllers callback
        // TODO: understand how err and results get filled, what is the callback/where it gets filled
      });
    },
    post: function (params, callback) {
      //TODO: everything
      var queryStr = 'insert into foods(text, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },


  ratings: {
    get: function (params, callback) {
      //params = {food: "cake"};
      console.log("ratings.get alive, params..");
      // fetch all foods
      // var queryStr = 'SELECT * FROM ratings where food =  \"' + params.food + '\"';
      var queryStr = 'SELECT * FROM ratings WHERE food = ?';
      // TODO: figure out if this works!
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
    
  }

};

