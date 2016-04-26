angular.module('IssueTracker.common',[])

    .controller('MainCtrl',[
        '$scope',
        '$http',
        'identity',
        function($scope,$http,identity) {
            $scope.isLogged = identity.isLogged();

        }
    ]);