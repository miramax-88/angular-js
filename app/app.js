/**
 * Created by Maksym_Kondratenko on 09.02.2016.
 */
'use strict';


var Courses = [
    {
        "id": 1,
        "name": "First",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It",
        "date": "03/16/2013",
        "duration": "10",
        "authors": ['First']
    },
    {
        "id": 2,
        "name": "Second",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It",
        "date": "03/16/2013",
        "duration": "20",
        "authors": ['First', 'Second']
    }
];

var myApp = angular.module('myApp', [
    'ngResource',
    'ngRoute',
    'LocalStorageModule'
]).config(function ($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}).run(function ($httpBackend) {
    $httpBackend.whenGET('/partials/login.html').passThrough();
    $httpBackend.whenGET('/partials/course.html').passThrough();
    $httpBackend.whenGET('/partials/courses.html').passThrough();
    $httpBackend.whenGET('/partials/directives/authorsList.html').passThrough();
    $httpBackend.whenGET('/data/courses').respond(Courses);

    $httpBackend.whenGET('/data/user/test.json').respond(
        {"userName": "test", "password": "test", "name": "Max", "emailAddress": "test@test.com"}
    );

    $httpBackend.whenPOST(/\/data\/courses\/(.+)/).respond(function (method, url, data, headers) {
        console.log('Received these data:', method, url, data, headers);
        Courses.push(angular.fromJson(data));
        return [200, {}, {}];
    });
});

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider.when('/login', {templateUrl: '/partials/login.html', controller: 'LoginController'});
    $routeProvider.when('/courses', {templateUrl: '/partials/courses.html', controller: 'CoursesController'});
    $routeProvider.when('/courses/new', {templateUrl: '/partials/course.html', controller: 'CourseController'});
    $routeProvider.otherwise({redirectTo: '/login'});
}]);
