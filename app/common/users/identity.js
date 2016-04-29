angular.module('IssueTracker.users.identity', [])

    .factory('identity', [
        '$http',
        '$q',
        'BASE_URL',
        function($http, BASE_URL, $q) {

            function getCurrentUser() {
                var deferred = $q.deferred;

                var request = {
                    method: 'GET',
                    url: BASE_URL + 'users/me',
                    headers: {'Authorization': 'Bearer ' + sessionStorage.authToken}
                };

                $http(request)
                    .then(function(response) {
                        deferred.resolve(response.data)
                    }, function(err) {
                        deferred.reject(err);
                    });

                return deferred.promise;
            }

            function isAdmin() {

            }

            function hasLoggedUser() {
                return sessionStorage.authToken !== undefined;
            }

            return {
                getCurrentUser: getCurrentUser,
                hasLoggedUser: hasLoggedUser
            }
        }
    ]);