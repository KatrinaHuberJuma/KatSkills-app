/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Food ratings test', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: 'posey3861',
      database: 'foodratingsp'
    });
    dbConnection.connect();
    console.log("connected!");


    done();

  });

  afterEach(function() {
    dbConnection.end();
  });

  xit('Should insert posted messages to the DB', function(done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: { username: 'Valjean' }
    }, function () {
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/messages',
        json: {
          username: 'Valjean',
          message: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello'
        }
      }, function () {
        // Now if we look in the database, we should find the
        // posted message there.

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          // Should have one result:
          expect(results.length).to.equal(1);

          // TODO: If you don't have a column named text, change this test.
          expect(results[0].text).to.equal('In mercy\'s name, three days is all I need.');

          done();
        });
      });
    });
  });


  it('Should output all foods from the DB', function(done) {
    console.log("running food test");

    request('http://127.0.0.1:3000/classes/foods', function(error, response, body) {
        // console.log("response is ", response);
        var foodTable = JSON.parse(body);
        // console.log("response is ", response);
        console.log("first item in parsed response is ", foodTable[0]);
        expect(foodTable[0].name).to.equal('cake');
        expect(foodTable[0].macro).to.equal('carb');
        done();
      });
    
  });


  it('Should output the ratings for a given food', function(done) {

    console.log("running food ratings");
    // request('http://127.0.0.1:3000/classes/ratings?food=cake', function(error, response, body) 
    request('http://127.0.0.1:3000/classes/ratings', function(error, response, body) {
        console.log("food ratings body is ", body);
        var ratings = JSON.parse(body);
        console.log("ratings are ", ratings);
        done();

        // console.log("first item in parsed response is ", messageLog[0]);
        // expect(messageLog[0].name).to.equal('cake');
        // expect(messageLog[0].macro).to.equal('carb');
        // done();
      });
    
 });


});
