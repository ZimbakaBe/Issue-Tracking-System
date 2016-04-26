angular.module('IssueTracker.users.identity', [])

    .factory('identity', [
        '$http',
        function($http) {

        var access_token = '8d0QcRGmyWFqopCbpXUctR6V28GsFDXyLHcNnshOTnSUKdzG6Yo-lDxUdoOuEj52p7Wt_D-FgdsA4S-9fbrmJKrTPpmYYrcJOPnyNzAe8PiqJS9mZZgtOaZX_xcwOsymm8oAWHRFrrgq4zQTLeTolIank_nmbLRUTUndBqC8lVwpLRv0kolCKXicl_3VSdempcXAlMg8OKEKty3M8qPdlue82-JT9T0fWL6Ha-uTlti4SksbOLrLGEj646RoKZ1S9UGAlHQAX-IyfK2gh3FrGjQ_DFDg_YyDGb-Z_RxXlCEYRJHzBeGIYO7Oo2eth3p8CzGbAs5RxpcTZXt6P6VE3AjBnPGlb787lushwPZCMH5UcZDzZsTZ_vEJolsm3yPqmINS81dQ8z1fw6jAE2BFS8LK71u8agSSWjrOWhsZY4BYtF_Vrq3WwPWcjVjz8Ism87F3Pg-B4-KLNfR0rEQJW3rK7EOHnWNCEyNa8rTGVxpN7rEgcUNBGc-4OkDYa_6A';

        var email = 'viktor.boyanov@yahoo.com';

            $http.defaults.headers.common.Authorization =
                'Bearer ' + access_token;

        var currentUser = $http.get('')
            .then(function() {

            });

        return {
            getCurrentUser: function() {
                return {
                    email: email
                }
            },
            isLogged: function() {
                return false;
            }
        }

    }]);