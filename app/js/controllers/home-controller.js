angular.module('IssueTracker.home', [
        'IssueTracker.users.authentication'
])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/home', {
            templateUrl: 'app/html/home.html',
            controller: 'HomeCtr'
        })
    }])

    .controller('HomeCtr', [
        '$scope',
        'authentication',
        function($scope) {
            $scope.login = function(user) {
                authentication.login(user);
            };

            $scope.register = function(user) {
                authentication.register(user);
            }

    }]);