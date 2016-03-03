'use strict';
(function () {
    myApp.factory('formatService', ['$filter', function ($filter) {
        return {
            formatDate: function (date) {
                return $filter('date')(date, 'dd.mm.yyyy');
            },
            formatDuration: function (time) {
                var duration = $filter('duration');
                return duration(time);
            }
        };
    }]);
})();
