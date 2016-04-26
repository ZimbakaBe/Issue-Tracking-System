angular.module('IssueTracker.users.authentication', [])

    .factory('authentication', [
        '$http',
        '$q',
        'BASE_URL',
        function($http, $q, BASE_URL) {

            function registerUser(user) {
                var deferred = $q.defer();

                $http.post(BASE_URL + 'Account/Register', user)
                    .then(function(response) {
                        deferred.resolve(response.data);
                        console.log(response.data);
                    }, function(error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            }

            function loginUser(user) {
                var deferred = $q.defer();

                var loginUserData = "grant_type=password&username=" + user.email + "&password=" + user.password;

                $http.post(BASE_URL + 'Token', loginUserData,
                    {
                      headers: {'Content-type': 'application/x-www-form-urlencoded'}
                    }).then(function(response) {
                        deferred.resolve(response.data);
                        console.log(response.data);
                    }, function(error) {
                        deferred.reject(error);
                    });

                return deferred.promise;

            }

            function logoutUser() {
                var deferred = $q.defer();
                //$http.post(BASE_URL + "Account/Logout", {
                //    headers: {'Authorization' : 'Bearer' + token}
                //})
                //    .then(function() {
                //        deferred.resolve();
                //    }, function() {
                //        deferred.reject();
                //    });

                return deferred.promise;
            }

            function hasLoggedUser() {
                return localStorage.access_token !== 'undefined';
            }

            return {
                login: loginUser,
                register: registerUser,
                logout: logoutUser
            }
        }
    ]);