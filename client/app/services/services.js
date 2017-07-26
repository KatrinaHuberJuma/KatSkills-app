angular.module('shortly.services', [])

.factory('Skills', function ($http, $q) {

  var getAll = function () {
    console.log("services/services.js: Skills.getAll alive!  calling RESTful server...")
    return $http({  // a RESTful API call!
      method: 'GET',
      url: 'http://localhost:3000/classes/skills',
      // this url goes to where a server is running server/app.js
      headers: { "Access-Control-Allow-Headers": "*"}
    })
    .then(function (resp) {
      return resp.data;
    });
  };


  var getExample = function (url, headers) {
    return $http.get(url, headers);
  };

  // expect url to be something like: http://localhost:8080/APIServer/rest/default/pdztu/v1/prefix:table
  // expect data to be a row object like: [{"ident":null,"name":null,"boolean":null,"@metadata":{"action":"INSERT","entity":"pdztu:boolean_table","links":[]}}]
  // expect headers to be something like: { "Content-Type": "application/json", "Authorization": "CALiveAPICreator [key]:1" }
  // in action, it might be called like so: serviceName.putExample(x,y,z).success(function (txsummary) { console.log(txsummary); /* do stuff with txsummary */ })
  var putExample = function (url, data, headers) {
    if (!headers.Authorization) {
      headers.Authorization = "CALiveAPICreator demo_full:1"
    }
    return $http.post(
      url,
      data,
      { headers: espresso.services.espressoHeaders }
    );
  }

  var addOne = function (link) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
})

// 
.factory('Projects', function ($http, $q) {

  var getAll = function () {
    console.log("services/services.js: Projects.getAll alive!  calling RESTful server...")
    return $http({  // a RESTful API call!
      method: 'GET',
      url: 'http://localhost:3000/classes/projects',
      params: {id: 2},
      // this url goes to where a server is running server/app.js
      headers: { "Access-Control-Allow-Headers": "*"}
    })
    .then(function (resp) {
      return resp.data;
    });
  };


  var getExample = function (url, headers) {
    return $http.get(url, headers);
  };

  // expect url to be something like: http://localhost:8080/APIServer/rest/default/pdztu/v1/prefix:table
  // expect data to be a row object like: [{"ident":null,"name":null,"boolean":null,"@metadata":{"action":"INSERT","entity":"pdztu:boolean_table","links":[]}}]
  // expect headers to be something like: { "Content-Type": "application/json", "Authorization": "CALiveAPICreator [key]:1" }
  // in action, it might be called like so: serviceName.putExample(x,y,z).success(function (txsummary) { console.log(txsummary); /* do stuff with txsummary */ })
  var putExample = function (url, data, headers) {
    if (!headers.Authorization) {
      headers.Authorization = "CALiveAPICreator demo_full:1"
    }
    return $http.post(
      url,
      data,
      { headers: espresso.services.espressoHeaders }
    );
  }

  var addOne = function (link) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
})

