/**
 * Created by Maksym_Kondratenko on 15.02.2016.
 */

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
