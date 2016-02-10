/**
 * Created by Maksym_Kondratenko on 10.02.2016.
 */
'use strict';

myApp.directive('authorsList', function ($location) {
    return {
        restrict: "E",
        templateUrl: '/partials/directives/authorsList.html',
        controller: function($scope){
            $scope.addCourse = function() {
                $location.url('/edit-course');
            }
        }
    };
});
