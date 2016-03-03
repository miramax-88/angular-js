'use strict';

myApp.filter('duration', [function () {
    return function (min) {
        if (!min) {
            return '';
        }
        var hours = Math.trunc(min / 60);
        var minutes = min % 60;
        return hours + ' hours' + ":" + minutes + ' minutes';
    };
}]);

/*myApp.filter('filterByTitle', [function () {
    return function (courses, val) {
        if (!val.length) {
            return;
        }
        var posFilterArray = [];
        angular.forEach(courses, function (course) {
            if (course.name === val) {
                posFilterArray.push(course);
            }
        });
        return posFilterArray;
    };


}]);*/

