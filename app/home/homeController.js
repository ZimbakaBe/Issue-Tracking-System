angular.module('IssueTracker.home', [
        'IssueTracker.users.authentication',
        'IssueTracker.home.service',
        'IssueTracker.home.directives'
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
        'homeService',

        function($scope,authentication,$location,identity,homeService) {

            $scope.isAdmin = identity.isAdmin;
            $scope.hasLoggedUser = identity.hasLoggedUser;

            $scope.getUserIssues = function(){
                homeService.getUserIssues()
                    .then(
                        function(data) {
                            $scope.issuesData = data.data;

                            for (var obj in data.data.Issues) {
                                $scope.projectName = data.data.Issues[obj].Project.Name;
                            }
                        }, function(err) {
                            console.log(err);
                        }
                );
        };

            $scope.login = function(user) {
                authentication.login(user)
                    .then(function (response) {
                        sessionStorage['authToken'] = response.access_token;

                        identity.getCurrentUser()
                            .then(
                                function(data) {
                                    sessionStorage['currentUser'] = JSON.stringify(data);
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
                    .then(function(response) {
                        alert('You have registered successfully');
                        $scope.login({
                            email: user.email,
                            password: user.password
                        })
                    })
            };

            $scope.logout = function() {
                sessionStorage.clear();
            }

    }]);