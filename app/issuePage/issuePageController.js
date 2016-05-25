angular.module('IssueTracker.issuePage', [
    'IssueTracker.issuePage.Service'
])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/issues/:Id', {
            templateUrl: 'app/issuePage/issuePage.html',
            controller: 'issuePageCtrl'
        })
    }])

    .controller('issuePageCtrl', [
        '$scope',
        '$routeParams',
        'issuePageService',
        function($scope, $routeParams, issuePageService) {

            $scope.viewIssue = function(id) {
                issuePageService.viewIssue(id)
                    .then(
                        function (data) {
                            $scope.issue = data;
                            var currentUser = JSON.parse(sessionStorage.currentUser);
                            $scope.currentUserId = currentUser.Id;
                            $scope.authorId = data.Author.Id;
                        }, function(err) {
                            console.log(err);
                        }
                    )
            }

            $scope.viewIssue($routeParams.Id);
        }
    ]);