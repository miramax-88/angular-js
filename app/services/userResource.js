/**
 * Created by Maksym_Kondratenko on 15.02.2016.
 */

myApp.factory('userResource', ['$resource', function ($resource) {
    var User = $resource('/data/user/:userName.json', {userName:'@userName'}, { });

    User.queryAll = function (callback) {
        return User.query({}, callback)
    };

    return User;
}]);
