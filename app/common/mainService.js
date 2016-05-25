angular.module('IssueTracker.common.service', [])

    .factory('mainService', [
        '$http',
        '$q',
        'BASE_URL',
        function($http, $q, BASE_URL) {

            function getAllUsers() {
                var deferred = $q.deferred;

                var request = {
                    method: 'GET',
                    url: BASE_URL + 'users/',
                    headers: {'Authorization' : 'Bearer ' + sessionStorage.authToken}
                };

                $http(request)
                    .then(
                        function(data) {
                            deferred.resolve(data.data)
                        }, function(err) {
                            deferred.reject(err);
                        });

                return deferred.promise();

            }
        }
    ]);