/**
 * Created by Maksym_Kondratenko on 10.02.2016.
 */
'use strict';


myApp.directive('addCourseBtn', function ($location) {
    return {
        restrict: "E",
        template: '<button type="button" class="btn btn-default">Add course</button>',
        controller: function($scope){
            $scope.addCourse = function() {
                $location.url('/courses/new');
            }
        }
    };
});
