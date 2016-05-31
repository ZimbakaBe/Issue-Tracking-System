angular.module('IssueTracker.currentProject.service', [])

    .factory('currentProjectService',[
        '$http',
        '$q',
        'BASE_URL',
        function($http,$q,BASE_URL) {

            function viewProjectIssues(id) {
                var deferred = $q.defer();

                var request = {
                    method: 'GET',
                    url: BASE_URL + 'projects/' + id + '/issues',
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
                viewProjectIssues: viewProjectIssues
            }
        }
    ]);