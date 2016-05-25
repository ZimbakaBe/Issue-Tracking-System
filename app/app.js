'use strict';

// Declare app level module which depends on views, and components
angular.module('IssueTracker', [
  'ngRoute',
  'ngCookies',
  'ngScrollbar',
  'IssueTracker.issuePage',
  'IssueTracker.home',
  'IssueTracker.users.identity',
  'IssueTracker.admin',
  'IssueTracker.addIssue',
  'IssueTracker.allProjects',
  'IssueTracker.currentProject',
  'angular.filter'
])
    .config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/#'});

}])
    .constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/');
