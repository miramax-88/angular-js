/**
 * Created by Maksym_Kondratenko on 09.02.2016.
 */
'use strict';

myApp.controller('LoginController',
    function LoginController($scope, $location, userData, authService) {
        $scope.user = {
            userName: '',
            password: ''
        };
        $scope.login = function() {
            userData.getUser($scope.user.userName, function (user) {
                if (!!user && user.password === $scope.user.password) {
                    authService.setCurrentUser(user);
                    $location.url('/courses');
                }
            });
        }

    }
);
