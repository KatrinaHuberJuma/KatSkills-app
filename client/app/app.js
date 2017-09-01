/*
  Elements of Angular app
    Page.html -- the view
      eye candy
      Fields (data goes here) - with ng directives for data binding
      Clicky things (expose events that we wire to controllers), like buttons
    Controllers <page>.js (|| page.html)
      handlers for events from Page
      In particular, call services to populate model, save model to disk etc
    Model
      Functions to interact with (RESTful) Server... 
      Model exposed via $scope 
    THIS FILE:
      execution starts here - config, launch page
  Angular's BIG DEAL - 2-way Data Binding
      Declarative - just code field directives
      Angular ensure
        1 - changes to model show up on fields
        2 - changes to fields show up on model
  So, the big deal is the model: $scope - elements *are* the data 
  $scope is the connection between the view and the directives
      Global
      Local (within a div?  variable in controller?)




*/

angular.module('shortly', [
  'ui.bootstrap',
  'ui.router',
  'shortly.services',
  'shortly.skills',
  'shortly.projects'//,
  // 'shortly.relatedProjects'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    
    .state('skills', {
      url: '/skills',
      
      views: {
        'main': {
          templateUrl: 'app/skills/skills.html',
          controller: 'SkillsController',
        }
      }
    })

    .state('projects', {
      url: '/projects',
      
      views: {
        'main': {
          templateUrl: 'app/projects/projects.html',
          controller: 'ProjectsController',
        }
      }
    })

    // .state('skills.relatedprojects', {
    //   url: '/skills/:skillId',
    //   templateUrl: 'app/projects/projects.html',
    //   controller: 'RelatedProjectsController'
    // })
    // .state('skills', {
    //     url: "/skills",
    //     views: {
    //         "main": {
    //             templateUrl: 'app/skills/skills.html',
    //             controller: 'SkillsController'
    //         },
    //         'relatedprojects': {
    //             templateUrl: 'app/skills/skills.html',
    //             controller: 'RelatedProjectsController'
    //         }
    //     }
    // })




  // catch all route
  // send users to the home page
  $urlRouterProvider.otherwise('/skills');
})

