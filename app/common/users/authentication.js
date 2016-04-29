angular.module('IssueTracker.users.authentication', [])

    .factory('authentication', [
        '$http',
        '$q',
        'BASE_URL',
        function($http, $q, BASE_URL) {

            function registerUser(user) {
                var deferred = $q.defer();

                $http.post(BASE_URL + 'api/Account/Register', user)
                    .then(function(response) {
                        deferred.resolve(response.data);
                    }, function(error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            }

            function loginUser(user) {
                var deferred = $q.defer();

                var loginUserData = "grant_type=password&username=" + user.email + "&password=" + user.password;

                $http.post(BASE_URL + 'api/Token', loginUserData,
                    {
                      headers: {'Content-type': 'application/x-www-form-urlencoded'}
                    }).then(function(response) {
                        deferred.resolve(response.data);
                    }, function(error) {
                        deferred.reject(error);
                    });

                return deferred.promise;

            }

            function logoutUser() {
                var deferred = $q.defer();
                //var access_token = localStorage.getItem('access_token');
                var request = {
                    method: 'POST',
                    url: BASE_URL + 'api/Account/Logout',
                    headers:{'Authorization': 'Bearer ' + sessionStorage.authToken}
                };

                $http(request)
                    .then(function(){
                        deferred.resolve();
                        //localStorage.clear();
                    }, function(err){
                        deferred.reject(err)
                    });

                //$http.post(BASE_URL + "Account/Logout", {
                //    headers: {'Authorization' : 'Bearer' + localStorage.getItem('access_token') }
                //})
                //    .then(function() {
                //        deferred.resolve();
                //        localStorage.clear();
                //    }, function() {
                //        deferred.reject();
                //    });

                return deferred.promise;
            }

            return {
                login: loginUser,
                register: registerUser,
                logout: logoutUser
            }
        }
    ]);