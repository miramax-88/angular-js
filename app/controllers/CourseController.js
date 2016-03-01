/**
 * Created by Maksym_Kondratenko on 10.02.2016.
 */

'use strict';
myApp.controller('CourseController',
    function CourseController($scope, $location, coursesResource, $routeParams, authService, ModalService) {
        if (!authService.isAuthenticated()) {
            $location.url('/login');
            return;
        }
        $scope.course = {};

        $scope.course= {
            models: {
                selected: null,
                lists: {"Authors": [], "Courses": [] }
            }
        };

        // Generate initial model
        for (var i = 1; i <= 3; ++i) {
            $scope.course.models.lists.Courses.push({label: "Author " + i});
        }

        $scope.$watch('models', function(model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);

        if ($location.$$url.indexOf('/courses/edit') > -1) {
            coursesResource.getItem($routeParams.id).then(function (data) {
                $scope.course = data;
            });
        }

        $scope.saveCourse = function (course, editCourseForm) {
            console.log(editCourseForm);
            if (editCourseForm.$invalid) {
                ModalService.showModal({
                    templateUrl: '/partials/modal.html',
                    controller: "CourseController",
                    scope: $scope
                }).then(function (modal) {
                    modal.element.modal();
                });
            } else {
                coursesResource.saveItem(course).then(function () {
                    $location.url('/courses/');
                });
            }
        };

        $scope.cancelCourse = function () {
            $location.url('/courses')
        };
    }
);
