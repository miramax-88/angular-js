/**
 * Created by Maksym_Kondratenko on 10.02.2016.
 */
'use strict';

myApp.directive('authorsList', function ($location) {
    return {
        restrict: "E",
        templateUrl: '/partials/directives/authorsList.html',
        replace: true,
        controller: function(scope){
            $('#add').click(function() {
                return !$('#select1 option:selected').remove().appendTo('#select2');
            });
            $('#remove').click(function() {
                return !$('#select2 option:selected').remove().appendTo('#select1');
            });
        }
    };
});
