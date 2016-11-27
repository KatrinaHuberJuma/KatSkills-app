var models = require('../models');

module.exports = {

// controllers take in rest endpoint parameters, and return JSON sting to client
// they call models to do db work

  foods: {
    get: function (req, res) {
      console.log('foods.get controller!');
      models.foods.get(function(err, results) {
        console.log('results = ', results);
        if (err) { throw "foods.get err: " + err;}
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];  // TODO proper names
      models.foods.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  },

  ratings: {
    get: function (req, res) {
      console.log('ratings.get controller alive ');
      // var params = [{food: 'cake'}]; // TODO get params (args)
      models.ratings.get(function(err, results) {
        console.log('results = ', results);
        if (err) { throw "ratings.get err: " + err;}
        res.json(results);
      });
    }
  }

  };
