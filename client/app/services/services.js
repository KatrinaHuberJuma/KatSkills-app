angular.module('shortly.services', [])

.factory('Custs', function ($http, $q) {

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

  var getAll = function () {
    console.log("services/services.js: Custs.getAll alive")
    var doLAC = false;
    if (doLAC) {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/rest/default/demo/v1/demo:customer',
        headers: { /*  "Access-Control-Allow-Headers": "*", */  "Authorization": "CALiveAPICreator demo_full:1"}
      })
      .then(function (resp) {
        return resp.data;
      });
    } else {
      var deferred = $q.defer();
      var custsObj = [ {name: "Cust1", balance: 10}, {name: 'Cust2', balance: 20} ];
      deferred.resolve(custsObj);
      return deferred.promise;
    }
  };

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







.factory('Foods', function ($http, $q) {

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

  var getAll = function () {
    console.log("services/services.js: Foods.getAll alive")
    var doLAC = false;
    if (doLAC) {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/rest/default/demo/v1/demo:customer',
        headers: { /*  "Access-Control-Allow-Headers": "*", */  "Authorization": "CALiveAPICreator demo_full:1"}
      })
      .then(function (resp) {
        return resp.data;
      });
    } else {
      var deferred = $q.defer();
      var FoodsObj = [ {name: "Food1", balance: 10}, {name: 'Food2', balance: 20} ];
      deferred.resolve(custsObj);
      return deferred.promise;
    }
  };

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







.factory('Links', function ($http) {
  // Your code here

  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

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
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
