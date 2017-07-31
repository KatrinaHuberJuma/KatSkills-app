angular.module('shortly.projects', [])

.controller('ProjectsController', function ($scope, Projects) {

  $scope.data = {};

  var initializeProjects = function () {
    console.log("ProjectsController.initializeProjects is alive");
    Projects.getAll()
      .then(function (projects) {
        $scope.data.projects = projects;  // set up/initialize model 
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // event handler for page's ng-click="setSelected(eachProject)" (see projects.html)
  $scope.setSelected = function (selected) { 
     console.log("ProjectsController.setSelected is alive", arguments, this, selected);
     $scope.selectedProject = selected; // add selectedProject into scope, enabling {{selectedProject.name}}
     // call ratings service to get projects for selected.name
     // results -> $scope.data.projectRatings
  };

  initializeProjects();
});
