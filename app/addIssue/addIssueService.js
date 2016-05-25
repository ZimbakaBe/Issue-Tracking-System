angular.module('IssueTracker.addIssue.service',[])

    .factory('addIssueService', [
        '$http',
        '$q',
        'BASE_URL',
        function($http,$q,BASE_URL) {

            function addIssue(issue) {
                var deferred = $q.defer();

                var data = 'Title=' + issue.Title +
                    '&Description=' + issue.Desccription +
                    '&DueDate=' + issue.DueDate +
                    '&ProjectId=' + issue.ProjectId +
                    '&AssigneeId=' + issue.AssigneeId +
                    '&PriorityId=' + issue.PriorityId +
                    '&Labels=' + issue.Labels;

                var request = {
                    method: 'POST',
                    url: BASE_URL + 'issues/',
                    data: data,
                    headers: {
                        'Authorization': 'Bearer' + sessionStorage.authToken,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                };

                $http(request)
                    .then(
                        function(response){
                            deferred.resolve(response);
                        }, function(err) {
                            deferred.reject(err);
                        }
                    );

                return deferred.promise();
            }

            return {
                addIssue: addIssue
            }
        }
    ]);