var models = require('../models');

module.exports = {

// controllers take in rest endpoint parameters, and return JSON string to client
// they call models to do db work

  skills: {
    get: function (req, res) { // req = client input data, res = data return to client 
    // in server/routes.js this method is called controller.skills.get
      console.log('skills.get in server/controller/index.js has been called!');
      models.skills.get(function(err, results) {
      // models.skills has a get method, defined in server/models/index
        console.log('skills.get done, now in callback in server/controller/index results = ', results);
        if (err) { throw "skills.get in server/controller/index.js err: " + err;}
        // if things go wrong, show the error message TODO: where does err come from?
        res.json(results);  // RETURN THE DATA!
        // is the .json method built in? 
      });
    }//,
    // post: function (req, res) {
    //   var params = [req.body.message, req.body.username, req.body.roomname];  // TODO proper names
    //   models.skills.post(params, function(err, results) {
    //     if (err) { throw "skills.post in server/controller/index.js err: " + err; }
    //     res.sendStatus(201);
    //   });
    // }
  },

  projects: {
    get: function (req, res) {
      console.log('projects.get in server/controller/index.js is alive ');
      var params = req.query; 
      models.projects.get(params, function(err, results) {
        if (err) { throw "projects.get in server/controller/index.js err: " + err;}
        res.json(results);
      });
    }
  }

  };
