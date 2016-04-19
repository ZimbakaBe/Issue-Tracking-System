angular.module('IssueTracker.users.authentication', [])

    .factory('authentication', [
        '$http',
        '$q',
        function($http, $q, BASE_URL) {

        function registerUser() {
            var deferred = $q.defer();

            $http.post(BASE_URL + 'Account/Register', user)
                .then(function(response) {

                }, function(error) {

                });

            return deferred.promise;
        }

        function loginUser() {
            var deferred = $q.defer();

            $http.post(BASE_URL + 'Account/Register', user)
                .then(function() {

                }, function(error) {

                });

            return deferred.promise;
        }

        function logoutUser() {
            var deferred = $q.defer();

            return deferred.promise;
        }

        return {
            login: loginUser,
            register: registerUser,
            logout: logoutUser
        }
    }]);