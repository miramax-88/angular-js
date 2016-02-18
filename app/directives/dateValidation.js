/**
 * Created by Maksym_Kondratenko on 17.02.2016.
 */
'use strict';


myApp.directive('dateValidation', ['$filter', function ($filter) {
    return {
        restrict: "A",
        replace: true,
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue == undefined) return '';
                var transformedInput = inputValue.replace(/[^0-9/.]/g, '');
                if (transformedInput != inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return transformedInput;
            });
        }
    };

}]);

