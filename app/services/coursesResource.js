/**
 * Created by Maksym_Kondratenko on 19.02.2016.
 */

'use strict';

myApp.factory('coursesResource', ['$resource', '$q', function ($resource, $q) {
    return {
        getItems: function () {
            var deferred = $q.defer();
            $resource('/data/courses/getItems').query({}, function(event){
                deferred.resolve(event);
            }, function(error){
                deferred.reject(error);
            });
            return deferred.promise;
        },
        getItem:  function (id) {
            var deferred = $q.defer();
            $resource('/data/courses/getItem').get({'id':id}, {}, function(event){
                deferred.resolve(event);
            }, function(error){
                deferred.reject(error);
            });
            return deferred.promise;
        },
        saveItem:  function () {
            var deferred = $q.defer();
            $resource('/data/courses/saveItem:id', {id:'@id'}, function(event){
                deferred.resolve(event);
            }, function(error){
                deferred.reject(error);
            });
            return deferred.promise;
        }
    }
}]);
