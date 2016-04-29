angular.module('IssueTracker.home', [
        'IssueTracker.users.authentication'
])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/#', {
            templateUrl: 'app/home/templates/home.html',
            controller: 'HomeCtr'
        })
    }])

    .controller('HomeCtr', [
        '$scope',
        'authentication',
        '$location',
        'identity',

        function($scope,authentication,$location,identity) {

            $scope.hasLoggedUser = identity.hasLoggedUser;

            $scope.login = function(user) {
                authentication.login(user)
                    .then(function (response) {
                        sessionStorage['authToken'] = response.access_token;

                        identity.getCurrentUser()
                            .then(
                                function(data) {
                                    sessionStorage['currentUser'] = JSON.stringify(data);
                                    console.log(sessionStorage.currentUser);
                                }, function(err) {
                                    console.log(err);
                                }
                            )
                    }, function(err) {
                        console.log(err);
                    });
            };

            $scope.register = function(user) {
                authentication.register(user)
                    .then(function(user) {
                        console.log(user);
                    });
            };

            $scope.logout = function() {
                sessionStorage.clear();
                //authentication.logout()
            }

    }]);