angular.module('IssueTracker.users.authentication', [])

    .factory('authentication', [
        '$http',
        '$q',
        '$cookies',
        '$location',
        'BASE_URL',
        function($http, $q, $cookies,$location,BASE_URL) {

            function registerUser(user) {
                var deferred = $q.defer();

                var data = {
                    'email':user.email,
                    'password':user.password,
                    'confirmpassword':user.confirmPassword
                };

                var request = {
                    method: 'POST',
                    url: BASE_URL + 'api/Account/Register',
                    data: data,
                    headers: {'Content-Type': 'application/json'}
                };

                $http(request)
                    .then(
                        function(response) {
                            deferred.resolve(response.data);
                        }, function (err) {
                            deferred.reject(err);
                        }
                    );

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
                //var deferred = $q.defer();
                ////var access_token = localStorage.getItem('access_token');
                //var request = {
                //    method: 'POST',
                //    url: BASE_URL + 'api/Account/Logout',
                //    headers:{'Authorization': 'Bearer ' + sessionStorage.authToken}
                //};
                //
                //$http(request)
                //    .then(function(){
                //        deferred.resolve();
                //        //localStorage.clear();
                //    }, function(err){
                //        deferred.reject(err)
                //    });
                //
                //return deferred.promise;
            }

            return {
                login: loginUser,
                register: registerUser,
                logout: logoutUser
            }
        }
    ]);