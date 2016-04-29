angular.module('IssueTracker.common.directives', [])
    .directive('logoutDirective', function() {
        return {
            restrict: 'A',
            template: 'app/common/templates/logoutDirective.html'
        }
    });
