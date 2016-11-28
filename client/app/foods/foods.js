angular.module('shortly.foods', [])

.controller('FoodsController', function ($scope, Foods) {

  $scope.data = {};

  var initializeFoods = function () {
    console.log("FoodsController.initializeFoods is alive");
    Foods.getAll()
      .then(function (foods) {
        $scope.data.foods = foods;  // set up model - big kahuna lives
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // event handler for page's ng-click="setSelected(eachFood)" (see foods.html)
  $scope.setSelected = function (selected) { 
     console.log("FoodsController.setSelected is alive", arguments, this, selected);
     $scope.selectedFood = selected; // add selectedFood into scope, enabling {{selectedFood.name}}
};

  initializeFoods();
});
