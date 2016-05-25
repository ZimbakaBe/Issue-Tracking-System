angular.module('IssueTracker.users.identity', [
    'IssueTracker.users.authentication'
])

    .factory('identity', [
        '$http',
        '$q',
        'BASE_URL',
        'authentication',
        function($http,$q,BASE_URL,authentication) {

            function getCurrentUser() {
                var deferred = $q.defer();

                var request = {
                    method: 'GET',
                    url: BASE_URL + 'users/me',
                    headers: {'Authorization': 'Bearer ' + sessionStorage.authToken}
                };

                $http(request)
                    .then(function(response) {
                        deferred.resolve(response.data);
                    }, function(err) {
                        deferred.reject(err);
                    });

                return deferred.promise;
            }

            function isAdmin() {
                if(sessionStorage['currentUser']) {
                    var current = JSON.parse(sessionStorage.currentUser);;
                    return current.isAdmin;
                }
            }

            function hasLoggedUser() {
                return sessionStorage.authToken !== undefined;
            }

            return {
                getCurrentUser: getCurrentUser,
                hasLoggedUser: hasLoggedUser,
                isAdmin: isAdmin
            }
        }
    ]);