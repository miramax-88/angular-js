/**
 * Created by Maksym_Kondratenko on 10.02.2016.
 */

'use strict';
myApp.controller('CoursesController',
    function CoursesController($scope, coursesResource, $filter, $location, authService) {
        if (!authService.isAuthenticated()) {
            $location.url('/login');
            return;
        }
        $scope.courses = {};
        $scope.searchBy = '';
        $scope.inputVal = '';

        coursesResource.getItems().then(function(data){
            $scope.courses = data;
        });

        $scope.find = function (val) {
            $scope.inputVal = val;
        };

        $scope.edit = function (course) {
            $location.url('/courses/edit/' + course.id);
        };
    }
);
