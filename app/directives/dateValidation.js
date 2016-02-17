/**
 * Created by Maksym_Kondratenko on 17.02.2016.
 */
'use strict';


myApp.directive('dateValidation', function (formatService) {
    return {
        restrict: "A",
        replace: true,
        link: function(scope, elem){
            elem.on('blur', function(event) {
                console.log(formatService.formatDate(scope.course.date, event));
                return formatService.formatDate(scope.course.date, event);
            });
        }
    };

});

