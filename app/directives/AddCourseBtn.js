'use strict';


myApp.directive('addCourseBtn', function ($location) {
    return {
        restrict: "E",
        replace: true,
        template: '<button type="button" class="btn btn-default">Add course</button>',
        controller: function($scope){
            $scope.addCourse = function() {
                $location.url('/courses/new');
            }
        }
    };
});
