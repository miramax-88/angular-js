'use strict';

myApp.directive('durationValidation', function (formatService) {
    return {
        restrict: "A",
        replace: true,
        link: function(scope, elem){
            scope.$watch(function(){
                formatService.formatDuration(scope.course.duration);
            });
        }
    };

});
