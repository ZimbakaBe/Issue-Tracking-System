angular.module('IssueTracker.currentProject',[
    'IssueTracker.currentProject.service'
])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projects/:Id',{
            templateUrl: 'app/projectPage/projectPage.html',
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
                        console.log(data.data);
                        console.log(data.data[0].Id);
                        console.log($scope.projectIssues[0].Id);
                    }, function (err) {
                        console.log(err);
                    });
            };

            $scope.viewProjectIssues($routeParams.Id);
        }
    ]);