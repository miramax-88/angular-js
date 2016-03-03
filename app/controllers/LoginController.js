'use strict';

myApp.controller('LoginController',
    function LoginController($scope, $location, userData, authService, currentCourse) {
        currentCourse.is = {};
        $scope.user = {
            userName: '',
            password: ''
        };
        $scope.error = {
            status: false
        };
        $scope.login = function() {
            userData.getUser($scope.user.userName, function (user) {
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
