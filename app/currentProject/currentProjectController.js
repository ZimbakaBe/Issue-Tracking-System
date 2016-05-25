angular.module('IssueTracker.currentProject',[
    'IssueTracker.currentProject.service'
])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projects/:Id',{
            templateUrl: 'app/currentProject/currentProject.html',
            controller: 'currentProjectCtrl'
        })
    }])

    .controller('currentProjectCtrl',[
        '$scope',
        '$routeParams',
        'currentProjectService',
        function($scope,$routeParams,currentProjectService) {

            $scope.viewProjectIssues = function(id) {
                currentProjectService.viewProjectIssues(id)
                    .then(function(data) {
                        $scope.projectIssues = data.data;
                    }, function (err) {
                        console.log(err);
                    });
            }

            $scope.viewProjectIssues($routeParams.Id);
        }
    ]);