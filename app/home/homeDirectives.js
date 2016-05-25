angular.module('IssueTracker.home.directives', [])

    .directive('ngLoginForm', [function() {
        return {
            restrict: 'A',
            templateUrl: 'app/home/templates/loginForm.html'
        }
    }])
    .directive('ngRegisterForm', [function() {
        return {
            restrict: 'A',
            templateUrl: 'app/home/templates/registerForm.html'
        }
    }])

    .directive('ngAffiliatedProjects',[function() {
        return {
            restrict: 'A',
            templateUrl: 'app/home/templates/affiliatedProjects.html'
        }
    }])

    .directive('ngAssignedIssues',[function() {
        return {
            restrict: 'A',
            templateUrl: 'app/home/templates/assignedIssues.html'
        }
    }]);