/**
 * Created by Maksym_Kondratenko on 17.02.2016.
 */

'use strict';

myApp.factory('formatService', ['$filter', function ($filter) {
    return {
        formatDate: function (date) {
            return  $filter('date')(date, 'dd.mm.yyyy');
        },
        formatDuration: function(time) {
            var duration = $filter('duration');
            return duration(time);
        }
    };
}]);

