angular.module('IssueTracker.addIssue',[
    'IssueTracker.addIssue.service'
])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/allProjects/add-issue/:id', {
            controller: 'addIssueCtrl',
            templateUrl: 'app/addIssue/addIssue.html'
        })
    }])

    .controller('addIssueCtrl', [
        '$scope',
        'addIssueService',
        function($scope, addIssueService) {

            $scope.addIssue = function(issue) {
                addIssueService.addIssue(issue);
            }
        }
    ]);