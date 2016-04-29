angular.module('IssueTracker.admin.service', [])

    .factory('adminService',[
        '$http',
        '$q',
        'BASE_URL',
        function($http,$q,BASE_URL) {

            function makeAdmin(userId) {
                var deferred = $q.deferred;

                var request = {
                    method: 'PUT',
                    url: BASE_URL + 'Users/makeadmin',
                    headers: {
                        'Authorization': 'Bearer ' + sessionStorage.authToken,
                        'Content-Type': 'application/json'
                    },
                    data: {'UserId': userId}
                };

                $http(request)
                    .then(
                        function success(data) {
                            deferred.resolve(data);
                        }, function error(err) {
                            deferred.reject(err);
                        }
                    );

                return deferred.promise();
            }

        }
    ]);