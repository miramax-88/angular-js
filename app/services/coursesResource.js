/**
 * Created by Maksym_Kondratenko on 19.02.2016.
 */

'use strict';

myApp.factory('coursesResource', ['$resource', function ($resource) {
    var Service = $resource('/data/courses/:id.json', {id:'@id'});

    Service.queryAll = function (cb) {
        return Service.query({}, cb)
    };

    return Service;
}]);
