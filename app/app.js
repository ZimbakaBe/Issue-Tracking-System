'use strict';

// Declare app level module which depends on views, and components
angular.module('IssueTracker', [
  'ngRoute',
  'IssueTracker.home',
  'IssueTracker.users.identity',
  //'IssueTracker.common.directives',
  'IssueTracker.admin'
])
    .config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/#'});

}])
    .constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/');
