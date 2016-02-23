/**
 * Created by Maksym_Kondratenko on 10.02.2016.
 */

'use strict';
myApp.controller('CoursesController',
    function CoursesController($scope, courseData, $filter) {
        var filterByTitle = $filter('filterByTitle');
        $scope.courses = courseData.getAllCourses();

        $scope.searchBy = '';
        $scope.inputVal = '';

        $scope.find = function(val){
            $scope.inputVal = val;
        };
    }
);
