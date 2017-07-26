// express (per router)>controllers>models (here)


var db = require('../db');


// controllers call models to do sql, return results

module.exports = {
// module.exports makes this object, with all it's sub objects and their methods, 
// available to other files, in this case /controllers/index.html

  skills: {
    get: function (callback) {
      console.log("server/models/index skills.get is being called to select all skills in the skill table");
      var queryStr = 'select * from Skills';
      // query for the sql call just below...
      db.query(queryStr, function(err, results) {
        //sql is a server, accessed via db.query
      // query is a method on the database object we required in,
      // query method must come from mysql because it is not defined in the file
        callback(err, results);  // this happens when the db returns the results, we now send to controllers callback
        // TODO: understand how err and results get filled, what is the callback/where it gets filled
      });
    },
    post: function (params, callback) {
      //TODO: everything
      var queryStr = 'insert into skills(text, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },


  projects: {
    get: function (params, callback) {
      //params = {skill: "cake"};
      console.log("projects.get alive, params..");
      console.log(params.id);
      // fetch all skills
      // var queryStr = 'SELECT * FROM projects where skill =  \"' + params.skill + '\"';
      var queryStr = 'SELECT Projects.* FROM Projects JOIN Project_Skills \
                              on Projects.id = Project_Skills.project_id \
                              WHERE Project_Skills.skill_id = ' + params.id;
      // TODO: figure out if this works!
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
    
  }


};
//      var queryStr = 
//      var queryStr = 'SELECT * FROM Projects';

