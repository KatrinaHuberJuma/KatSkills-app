angular.module('shortly.skills', [])

.controller('SkillsController', function ($scope, Skills) {

  $scope.data = {};

  var initializeSkills = function () {
    console.log("SkillsController.initializeSkills is alive");
    Skills.getAll()
      .then(function (skills) {
        $scope.data.skills = skills;  // set up/initialize model - big kahuna lives
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // event handler for page's ng-click="setSelected(eachSkill)" (see skills.html)
  $scope.setSelected = function (selected) { 
     console.log("SkillsController.setSelected is alive", arguments, this, selected);
     $scope.selectedSkill = selected; // add selectedSkill into scope, enabling {{selectedSkill.name}}
     // call ratings service to get skills for selected.name
     // results -> $scope.data.skillRatings
};

  initializeSkills();
});
