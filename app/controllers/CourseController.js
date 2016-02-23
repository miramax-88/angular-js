/**
 * Created by Maksym_Kondratenko on 10.02.2016.
 */

'use strict';
myApp.controller('CourseController',
    function CourseController($scope, $location, courseData) {
        $scope.course = {

        };
        $scope.saveCourse = function(course) {
            courseData.save(course/*, function() { $location.url('/course/' + course.id); }*/);
        };
        $scope.cancelCourse = function() {
            $location.url('/courses')
        };
    }
);
