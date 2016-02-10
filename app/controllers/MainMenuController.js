/**
 * Created by Maksym_Kondratenko on 09.02.2016.
 */
'use strict';

myApp.controller('MainMenuController',
    function MainMenuController($scope, authService) {
        $scope.logo = {
            img: 'img/angularjs-logo.png'
        };
        $scope.user = {};
        $scope.$watch(authService.getCurrentUserName, function () {
            $scope.user = authService.getCurrentUser();
        });

        $scope.isAuthenticated = function () {
            return authService.isAuthenticated();
        };

        $scope.logout = function () {
            authService.setCurrentUser({});
        };
    }
);

