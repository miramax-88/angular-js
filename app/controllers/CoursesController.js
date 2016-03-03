'use strict';
myApp.controller('CoursesController',
    function CoursesController($scope, coursesResource, $filter, $location, authService, currentCourse, ModalService) {
        if (!authService.isAuthenticated()) {
            $location.url('/login');
            return;
        }
        currentCourse.is = {};
        $scope.searchBy = '';
        $scope.inputVal = '';

        coursesResource.getItems().then(function (data) {
            $scope.courses = data;
        });

        $scope.find = function (val) {
            $scope.inputVal = val;
        };

        $scope.edit = function (course) {
            $location.url('/courses/edit/' + course.id);
        };
        $scope.remove = function (course) {
            ModalService.showModal({
                templateUrl: '/partials/confirmDeletion.html',
                controller: "CourseController",
                scope: $scope
            }).then(function (modal) {
                $scope.currentCourse = course;
                modal.element.modal();
            });
        };

        $scope.deleteCourse = function(course) {
            coursesResource.removeItem(course).then(function (data) {
                $scope.courses = data.courses;
            });
        };
    }
);
