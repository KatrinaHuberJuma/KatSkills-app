angular.module('shortly.foods', [])

.controller('FoodsController', function ($scope, Foods) {
  // Your code here

  $scope.data = {};

  var initializeFoods = function () {
    console.log("FoodsController.initializeFoods is alive");
    Foods.getAll()
      .then(function (foods) {
        $scope.data.foods = foods;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.idSelectedFood = null;
  $scope.setSelected = function (selected) {
     console.log("FoodsController.setSelected is alive", arguments, this, selected);
     $scope.selectedFood = selected;
};

  initializeFoods();
  });
