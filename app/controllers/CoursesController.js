/**
 * Created by Maksym_Kondratenko on 10.02.2016.
 */

'use strict';
myApp.controller('CoursesController',
    function CoursesController($scope, courseData) {

        $scope.courses = courseData.getAllEvents();

        $scope.search = '';
    }
);
