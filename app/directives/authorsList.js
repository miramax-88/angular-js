/**
 * Created by Maksym_Kondratenko on 10.02.2016.
 */
'use strict';

myApp.directive('authorsList', function ($location) {
    return {
        restrict: "E",
        templateUrl: '/partials/directives/authorsList.html',
        replace: true,
        controller: function ($scope) {
            $scope.models = {
                selected: null,
                lists: {"Course": [], "Authors": []}
            };

            // Generate initial model
            for (var i = 1; i <= 3; ++i) {
                $scope.models.lists.Authors.push({label: "Author " + i});
            }

            $scope.$watch('models', function(model) {
                $scope.modelAsJson = angular.toJson(model, true);
            }, true);
        }
    };
});
