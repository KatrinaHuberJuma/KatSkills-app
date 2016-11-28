var models = require('../models');

module.exports = {

// controllers take in rest endpoint parameters, and return JSON string to client
// they call models to do db work

  foods: {
    get: function (req, res) { // req = client input data, res = data return to client 
    // in server/routes.js this method is called controller.foods.get
      console.log('foods.get in server/controller/index.js has been called!');
      models.foods.get(function(err, results) {
      // models.foods has a get method, defined in server/models/index
        console.log('foods.get done, now in callback in server/controller/index results = ', results);
        if (err) { throw "foods.get in server/controller/index.js err: " + err;}
        // if things go wrong, show the error message TODO: where does err come from?
        res.json(results);  // RETURN THE DATA!
        // is the .json method built in? 
      });
    },
    post: function (req, res) {
    // why does my display of foods break when this is commented out? this doens't even make sense
      var params = [req.body.message, req.body.username, req.body.roomname];  // TODO proper names
      models.foods.post(params, function(err, results) {
        if (err) { throw "foods.post in server/controller/index.js err: " + err; }
        res.sendStatus(201);
      });
    }
  },

  ratings: {
    get: function (req, res) {
      console.log('ratings.get in server/controller/index.js is alive ');
      // var params = [{food: 'cake'}]; // TODO get params (args)
      models.ratings.get(function(err, results) {
        console.log('results = ', results);
        if (err) { throw "ratings.get in server/controller/index.js err: " + err;}
        res.json(results);
      });
    }
  }

  };
