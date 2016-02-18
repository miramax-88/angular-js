/**
 * Created by Maksym_Kondratenko on 17.02.2016.
 */
'use strict';


myApp.directive('dateValidation', function (formatService) {
    return {
        restrict: "A",
        replace: true,
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'dd/mm/yy',
                onSelect: function (date) {
                    var ar = date.split("/");
                    date = new Date(ar[2] + "-" + ar[1] + "-" + ar[0]);
                    ngModelCtrl.$setViewValue(date.getTime());
                    scope.$apply();
                }
            });
            ngModelCtrl.$formatters.unshift(function (v) {
                return $filter('date')(v, 'dd/MM/yyyy');
            });

        }
    };

});

