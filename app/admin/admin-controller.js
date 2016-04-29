angular.module('IssueTracker.admin', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/#/admin', {
            controller: 'AdminCtrl',
            templateUrl: 'app/admin/admin.html',
            access: {
                requiresAdmin: true
            }
        })
    }])

    .controller('AdminCtrl',[
        '$scope',
        'adminService',
        function($scope,adminService) {

            $scope.makeAdmin = function(user) {
                adminService.makeAdmin();
            }
        }
    ]);