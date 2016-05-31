angular.module('IssueTracker.issuePage.Service', [])

    .factory('issuePageService', [
        '$http',
        '$q',
        'BASE_URL',
        function($http, $q, BASE_URL) {

            function viewIssue(id) {
                var deferred = $q.defer();

                var request = {
                    method: 'GET',
                    url: BASE_URL + '/issues/' + id,
                    headers: {'Authorization': 'Bearer ' + sessionStorage.authToken}
                 };

                $http(request)
                    .then(
                        function(data) {
                            deferred.resolve(data.data);
                        }, function(err) {
                            deferred.reject(err);
                        }
                    );

                return deferred.promise;
            }

            function changeStatus(id, statusId) {
                var deferred = $q.defer();

                var request = {
                    method: 'PUT',
                    url: BASE_URL + '/issues/' + id + '/changestatus?statusid=' + statusId,
                    headers: {'Authorization': 'Bearer ' + sessionStorage.authToken}
                };

                $http(request)
                    .then(
                        function(data) {
                            deferred.resolve(data);
                        }, function(err) {
                            deferred.reject(err);
                        }
                    );

                return deferred.promise;
            }

            return {
                viewIssue: viewIssue,
                changeStatus: changeStatus
            }

        }
    ]);