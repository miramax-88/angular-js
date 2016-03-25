'use strict';
(function () {
    angular
        .module('myApp')
        .factory('userDataService', userData);
    userData.$inject = ['userResource'];

    function userData(userResource) {
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
