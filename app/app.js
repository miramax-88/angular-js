/**
 * Created by Maksym_Kondratenko on 09.02.2016.
 */
'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngResource',
    'ngRoute',
    'LocalStorageModule'
]).config(function ($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}).run(function($httpBackend){
    $httpBackend.whenGET('/partials/login.html').passThrough();
    $httpBackend.whenGET('/partials/courses.html').passThrough();
    $httpBackend.whenGET('/partials/directives/authorsList.html').passThrough();
    $httpBackend.whenGET('/data/user/test.json').respond(
        {"userName":"test","password":"test","name":"Max","emailAddress":"test@test.com"}
    );
});

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider.when('/login', {templateUrl: '/partials/login.html', controller: 'LoginController'});
    $routeProvider.when('/courses', {templateUrl: '/partials/courses.html', controller: 'CoursesController'});
    $routeProvider.when('/courses/new', {templateUrl: '/partials/course.html', controller: 'CourseController'});
    $routeProvider.otherwise({redirectTo: '/login'});
}]);
