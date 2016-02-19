/**
 * Created by Maksym_Kondratenko on 19.02.2016.
 */

'use strict';

myApp.factory('coursesResource', ['$resource', function ($resource) {
    var service = $resource('/data/courses/:id', {id:'@id'});

    service.queryAll = function (cb) {
        return service.query({}, cb)
    };

    return service;
}]);
