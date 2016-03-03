'use strict';

myApp.factory('userResource', ['$resource', function ($resource) {
    var User = $resource('/data/user/:userName.json', {userName:'@userName'}, { });

    User.queryAll = function (callback) {
        return User.query({}, callback)
    };

    return User;
}]);
