angular.module('IssueTracker.home.service',[
    'IssueTracker.currentProject.service'
])

    .factory('homeService',[
        '$http',
        '$q',
        'BASE_URL',

        function($http,$q,BASE_URL) {

            function getCurrentUserIssues() {
                var deferred = $q.defer();

                var request = {
                    method: 'GET',
                    url: BASE_URL + 'issues/me?orderBy=Project.Name desc, IssueKey&pageSize=4&pageNumber=1',
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

            function getProjectById(id) {
                var deferred = $q.defer();

                var request = {
                    method: 'GET',
                    url: BASE_URL + 'projects/' + id,
                    headers: {'Authorization' : 'Bearer ' + sessionStorage.authToken}
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
                getUserIssues: getCurrentUserIssues,
                getProjectById: getProjectById
            }
        }
    ]);