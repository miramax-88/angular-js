/**
 * Created by Maksym_Kondratenko on 10.02.2016.
 */

'use strict';
myApp.controller('CourseController',
    function CourseController($scope, $location, coursesResource, $routeParams, authService) {
        if (!authService.isAuthenticated()) {
            $location.url('/login');
            return;
        }
        $scope.course = {};
        if ($location.$$url.indexOf('/courses/edit') > -1) {
            coursesResource.getItem($routeParams.id).then(function (data) {
                $scope.course = data;
            });
        }

        $scope.saveCourse = function (course) {
            if ($location.$$url.indexOf('/courses/edit') > -1) {
                coursesResource.saveItem(course, function () {
                    $location.url('/course/' + course.id);
                });
            } else if ($location.$$url.indexOf('/courses/new') > -1) {
                coursesResource.saveItem(course, function () {
                    $location.url('/course/' + course.id);
                });
            }

        };
        $scope.cancelCourse = function () {
            $location.url('/courses')
        };
    }
);
