'use strict';

myApp.factory('userData', ['userResource', function (userResource) {
    return {
        getUser:function(userName, callback) {
            return userResource.get({userName:userName}, function (user) {
                if (callback)
                    callback(user);
            }, function(error){
                if (callback)
                    callback(error);
            });
        }
    };
}]);
