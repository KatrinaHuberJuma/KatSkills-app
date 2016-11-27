angular.module('shortly.links', [])

.controller('CustsController', function ($scope, Custs) {
  // Your code here

  $scope.data = {};

  var initializeCusts = function () {
    console.log("CustsController.initializeCusts is alive");
    Custs.getAll()
      .then(function (custs) {
        $scope.data.custs = custs;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.idSelectedCust = null;
  $scope.setSelected = function (selected) {
     console.log("CustsController.setSelected is alive", arguments, this, selected);
     $scope.selectedCust = selected;
};

  initializeCusts();
  });
