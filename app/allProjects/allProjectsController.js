angular.module('IssueTracker.allProjects', [
    'IssueTracker.allProjects.service'
])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/allProjects',{
            templateUrl: 'app/allProjects/allProjects.html',
            controller: 'allProjectsCtrl'
        })
    }])

    .controller('allProjectsCtrl', [
        '$scope',
        '$location',
        'allProjects',
        function($scope, $location, allProjects) {

            $scope.getAllProjects = function() {
                allProjects.getAllProjects()
                    .then(
                        function(data){
                            $scope.projects = data;
                        }
                    );
            };

        }
    ]);