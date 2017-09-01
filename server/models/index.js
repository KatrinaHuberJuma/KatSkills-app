// express (per router)>controllers>models (here)


var db = require('../db');


// controllers call models to do sql, return results

module.exports = {
// module.exports makes this object, with all it's sub objects and their methods, 
// available to other files, in this case /controllers/index.html

  skills: {
    get: function (params, callback) {
      //params = {skill: "cake"};
      console.log("skills.get alive, params..");
      // fetch all skills
      // var queryStr = 'SELECT * FROM skills where skill =  \"' + params.skill + '\"';
      if (params.id !== undefined) {
        console.log(params.id)
        var queryStr = 'SELECT Skills.*, Project_Skills.github, Project_Skills.description \
                              FROM Skills JOIN Project_Skills \
                              on Skills.id = Project_Skills.skill_id \
                              WHERE Project_Skills.project_id = ' + params.id;
      } 
      else {
        var queryStr = 'SELECT * FROM Skills';
      }
      // TODO: figure out if this works!
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },


  projects: {
    get: function (params, callback) {
      //params = {skill: "cake"};
      console.log("projects.get alive, params..");
      // fetch all skills
      // var queryStr = 'SELECT * FROM projects where skill =  \"' + params.skill + '\"';
      if (params.id !== undefined) {
        console.log(params.id)
        var queryStr = 'SELECT Projects.*, Project_Skills.github, Project_Skills.description \
                              FROM Projects JOIN Project_Skills \
                              on Projects.id = Project_Skills.project_id \
                              WHERE Project_Skills.skill_id = ' + params.id;
      } 
      else {
        var queryStr = 'SELECT * FROM Projects';
      }
      // TODO: figure out if this works!
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }//,
    // getRelated: function (params, callback) {
    //   //params = {skill: "cake"};
    //   console.log("projects.get alive, params..");
    //   console.log(params.id);
    //   // fetch all skills
    //   // var queryStr = 'SELECT * FROM projects where skill =  \"' + params.skill + '\"';
    //   var queryStr = 'SELECT Projects.* FROM Projects JOIN Project_Skills \
    //                           on Projects.id = Project_Skills.project_id \
    //                           WHERE Project_Skills.skill_id = ' + params.id;
    //   // TODO: figure out if this works!
    //   db.query(queryStr, params, function(err, results) {
    //     callback(err, results);
    //   });
    // }
    
  }


};
//      var queryStr = 
//      var queryStr = 'SELECT * FROM Projects';

