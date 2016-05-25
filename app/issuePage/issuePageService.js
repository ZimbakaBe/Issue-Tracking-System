angular.module('IssueTracker.issuePage.Service', [])

    .factory('issuePageService', [
        '$http',
        '$q',
        'BASE_URL',
        function($http, $q, BASE_URL) {

            function viewIssue(id) {
                var deferred = $q.defer();

                var requests = {
                    method: 'GET',
                    url: BASE_URL + '/issues/' + id,
                    headers: {'Authorization': 'Bearer ' + sessionStorage.authToken}
                 };

                $http(requests)
                    .then(
                        function(data) {
                            deferred.resolve(data.data);
                        }, function(err) {
                            deferred.reject(err);
                        }
                    );

                return deferred.promise;
            }

            return {
                viewIssue: viewIssue
            }

        }
    ]);