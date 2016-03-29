'use strict';
(function () {
    angular
        .module('myApp')
        .factory('userDataService', userDataService);

    userDataService.$inject = ['userResource'];

    function userDataService(userResource) {
        return {
            getUser: function (userName, callback) {
                return userResource.get({userName: userName}, function (user) {
                    if (callback)
                        callback(user);
                }, function (error) {
                    if (callback)
                        callback(error);
                });
            }
        };
    }
})();
