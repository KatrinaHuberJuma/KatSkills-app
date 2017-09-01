var models = require('../models');

module.exports = {

// controllers take in rest endpoint parameters, and return JSON string to client
// they call models to do db work

  skills: {
    get: function (req, res) {
      console.log('skills.get in server/controller/index.js is alive ');
      if (req.query) {

        var params = req.query;
        models.skills.get(params, function(err, results) {
          if (err) { throw "skills.getRelated in server/controller/index.js err: " + err;}
          res.json(results);
        });
      } else {
        var params = false;
        models.skills.get(params, function(err, results) {
          if (err) { throw "skills.get in server/controller/index.js err: " + err;}
          res.json(results);
        });
      }
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
      if (req.query) {

        var params = req.query;
        models.projects.get(params, function(err, results) {
          if (err) { throw "projects.getRelated in server/controller/index.js err: " + err;}
          res.json(results);
        });
      } else {
        var params = false;
        models.projects.get(params, function(err, results) {
          if (err) { throw "projects.get in server/controller/index.js err: " + err;}
          res.json(results);
        });
      }
    }//,
    // getRelated: function (req, res) {
    //   console.log('projects.getRelated in server/controller/index.js is alive ');
    //   var params = req.query; 
    //   models.projects.getRelated(params, function(err, results) {
    //     if (err) { throw "projects.getRelated in server/controller/index.js err: " + err;}
    //     res.json(results);
    //   });
    // },
  },



};
