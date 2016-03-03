'use strict';

var myApp = angular.module('myApp', [
    'ngResource',
    'ngRoute',
    'LocalStorageModule',
    'dndLists',
    'angularModalService'
]).config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider.when('/login', {templateUrl: '/partials/login.html', controller: 'LoginController'});
    $routeProvider.when('/courses', {templateUrl: '/partials/courses.html', controller: 'CoursesController'});
    $routeProvider.when('/courses/new', {templateUrl: '/partials/course.html', controller: 'CourseController'});
    $routeProvider.when('/courses/edit/:id', {templateUrl: '/partials/course.html', controller: 'CourseController'});
    $routeProvider.otherwise({redirectTo: '/login'});
}]);
