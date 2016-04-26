angular.module('IssueTracker.dashboard',[])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardCtrl'
        })
    }])

    .controller('DashboardCtrl', [
        '$scope',
        function($scope) {

        }
    ]);