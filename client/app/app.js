/*
  Elements of Angular app
    Page.html
      eye candy
      Fields (data goes here) - with ng directives for data binding
      Clicky things (that activate controllers), like buttons
    Controllers page.js
      handlers for events from Page
      In particular, call services to populate model, save model to disk etc
    Model
      Functions to interact with (RESTful) Server
        RESTful endpoints => controllers
        controllers cll models to get data, and convert it to JSON string
  Angular's BIG DEAL - 2-way Data Binding
      Declarative - just code field directives
      Angular ensure
        1 - changes to model show up on fields
        2 - changes to fields show up on model
  So, the big deal is the model: $scope - elements *are* the data 
      Global
      Local (within a div?  variable in controller?)
*/

angular.module('shortly', [
  'shortly.services',
  'shortly.foods',
  'ngRoute'

])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  // Used for configuring routes
  
    .when('/foods', {
      // when the endpoint is /foods, show client/app/foods/foods.html
        templateUrl: 'app/foods/foods.html',
        controller: 'FoodsController'
        // use the FoodsController (client/app/foods/foods.js)
      })

    .otherwise({
      // if someone puts in the wrong endpoint, redirect to foods
      redirectTo: '/foods'
    });
    

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
  //  --- MH sez 
  $httpProvider.interceptors.push('AttachTokens');
  // delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
  $httpProvider.defaults.useXDomain = true; 
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

})
.factory('AttachTokens', function ($window) {
  // this is an $httpInterceptor
  // its job is to stop all out going request
  // then look in local storage and find the user's token
  // then add it to the header so the server can validate the request
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.shortly');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location) {
  // here inside the run phase of angular, our services and controllers
  // have just been registered and our app is ready
  
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    // Scope is an object that refers to the application model. It is an execution context for expressions. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application. Scopes can watch expressions and propagate events. ---https://docs.angularjs.org/guide/scope
    console.log("app is alive");
    $location.path('/foods');
  });
});
