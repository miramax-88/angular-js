/**
 * Created by Maksym_Kondratenko on 10.02.2016.
 */

'use strict';
myApp.controller('CourseController',
    function CourseController($scope, $location) {
        $scope.course = {

        };
        $scope.saveCourse = function(course) {
            console.log(course)
        };
        $scope.cancelCourse = function() {
            $location.url('/courses')
        };
    }
);
