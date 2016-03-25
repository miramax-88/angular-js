'use strict';
(function () {
    angular.module('myApp').factory('authService', function (localStorageService) {

        var currentUser = 'currentUser';

        function cloneObject(object) {
            return JSON.parse(JSON.stringify(object));
        }

        return {
            getCurrentUserName: function () {
                return localStorageService.get(currentUser).userName;
            },
            getCurrentUser: function () {
                return cloneObject(localStorageService.get(currentUser));
            },
            setCurrentUser: function (user) {
                localStorageService.set(currentUser, cloneObject(user));
            },
            isAuthenticated: function () {
                return !!localStorageService.get(currentUser) && !!localStorageService.get(currentUser).userName;
            }
        };
    });
})();
