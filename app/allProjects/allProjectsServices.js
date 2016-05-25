angular.module('IssueTracker.allProjects.service', [])

    .factory('allProjects', [
        '$http',
        '$q',
        'BASE_URL',
        function($http,$q,BASE_URL) {

            function getAllProjects() {
            var deferred = $q.defer();

            var request = {
                method: 'GET',
                url: BASE_URL + 'projects',
                headers: {'Authorization': 'Bearer ' + sessionStorage.authToken}
            };

            $http(request)
                .then(
                    function(projects){
                        deferred.resolve(projects.data);
                    }, function(err) {
                        deferred.reject(err);
                    }
                );

            return deferred.promise;
        }

            return {
                getAllProjects: getAllProjects
            }
        }
    ]);