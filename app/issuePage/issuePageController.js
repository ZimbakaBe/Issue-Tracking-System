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
        '$route',
        'issuePageService',
        function($scope, $routeParams, $route, issuePageService) {

            $scope.viewIssue = function(id) {
                issuePageService.viewIssue(id)
                    .then(
                        function (data) {
                            $scope.issue = data;
                            var currentUser = JSON.parse(sessionStorage.currentUser);

                            $scope.currentUserId = currentUser.Id;
                            $scope.authorId = data.Author.Id;
                            $scope.assigneeId = data.Assignee.Id;
                            $scope.availableStatuses = data.AvailableStatuses;

                        }, function(err) {
                            console.log(err);
                        }
                    )
            };

            $scope.changeStatus = function(id,statusId) {
                issuePageService.changeStatus(id, statusId)
                    .then(
                        function(data) {
                            //трябва да видищ кои са ти availabla status от viewIssue функцията и след това да въртиш цикъл
                            //и да ги вкараш в скоупа
                            //issuePageService.viewIssue(id)
                            //    .then(
                            //        function(response) {
                            //            $scope.availableStatuses = response.AvaialableStatuses;
                            //        }, function(error){
                            //            console.log(error);
                            //        }
                            //    )
                            $route.reload();
                        }, function(err) {
                            console.log(err);
                        }
                    )
            };

            $scope.viewIssue($routeParams.Id);
        }
    ]);