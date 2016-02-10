/**
 * Created by Maksym_Kondratenko on 09.02.2016.
 */
'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {templateUrl: '/partials/login.html', controller: 'LoginController'});
    $routeProvider.when('/courses', {templateUrl: '/partials/courses.html', controller: 'CoursesController'});
    $routeProvider.when('/edit-course', {templateUrl: '/partials/edit-course.html', controller: 'EditCourseController'});
    $routeProvider.otherwise({redirectTo: '/login'});
}]);
