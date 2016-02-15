/**
 * Created by Maksym_Kondratenko on 15.02.2016.
 */

myApp.factory('userResource', ['$resource', function ($resource) {
    var service = $resource('/data/user/:userName.json', {userName:'@userName'}, { });

    service.queryAll = function (callback) {
        return service.query({}, callback)
    };

    return service;
}]);
