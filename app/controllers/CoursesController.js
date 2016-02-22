/**
 * Created by Maksym_Kondratenko on 10.02.2016.
 */

'use strict';
myApp.controller('CoursesController',
    function CoursesController($scope, courseData, $filter) {
        var filterByTitle = $filter('filterByTitle');
        $scope.courses = courseData.getAllEvents();

        $scope.searchBy = '';
        $scope.inputVal = '';

        $scope.find = function(val){
            if(!val){
                $scope.courses = courseData.getAllEvents();
                return;
            }
            $scope.courses = filterByTitle($scope.courses, val);
        };
    }
);
