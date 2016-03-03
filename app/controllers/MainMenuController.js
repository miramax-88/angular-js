'use strict';
(function () {
    myApp.controller('MainMenuController',
        function MainMenuController($scope, authService, $routeParams, currentCourse) {

            $scope.course = currentCourse;
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
            $scope.preventDefault = function (e) {
                e.preventDefault();
            };
        });
})();
