'use strict';
(function () {
    angular.module('myApp').controller('LoginController',
        function LoginController($scope, $location, userDataService, authService, currentCourse) {
            currentCourse.is = {};
            $scope.user = {
                userName: "",
                password: ""
            };
            $scope.error = {
                status: false
            };
            $scope.login = function () {
                userDataService.getUser($scope.user.userName, function (user) {
                    if (!!user && user.password === $scope.user.password) {
                        authService.setCurrentUser(user);
                        $location.url('/courses');
                    } else {
                        $scope.error.status = true;
                        $scope.user.password = '';
                    }
                });
            }

        }
    );
})();
