angular.module('IssueTracker.home', [
        'IssueTracker.users.authentication'
])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/#', {
            templateUrl: 'app/common/templates/home.html',
            controller: 'HomeCtr'
        })
    }])

    .controller('HomeCtr', [
        '$scope',
        'authentication',
        '$location',
        function($scope,authentication, $location) {
            $scope.login = function(user) {
                authentication.login(user)
                    .then(function () {
                        console.log(user);
                        $location.path('/dashboard');
                    });
            };

            $scope.register = function(user) {
                authentication.register(user)
                    .then(function(user) {
                        console.log(user);
                    });
            };

            $scope.logout = function() {
                authentication.logout()
            }

    }]);