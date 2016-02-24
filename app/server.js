/**
 * Created by Maksym_Kondratenko on 24.02.2016.
 */

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


myApp.config(function ($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}).run(function ($httpBackend, localStorageService) {
    $httpBackend.whenGET('/partials/login.html').passThrough();
    $httpBackend.whenGET('/partials/course.html').passThrough();
    $httpBackend.whenGET('/partials/courses.html').passThrough();
    $httpBackend.whenGET('/partials/directives/authorsList.html').passThrough();
    $httpBackend.whenGET('/data/courses/getItems').respond(function () {
        if (localStorageService.isSupported && localStorageService.get('courses')) {
            Courses = localStorageService.get('courses');
        } else {
           localStorageService.set('courses', Courses);
        }
        return [200, Courses, {}];
    });

    $httpBackend.whenGET('/data/courses/getItem').respond(function (method, url, id, headers) {
        var courses = localStorageService.get('courses');

        function findById(source, id) {
            for (var i = 0; i < source.length; i++) {
                if (source[i].id === id) {
                    return source[i];
                }
            }
        }
        console.log('Received these data:', method, url, id, headers);
        return [200, findById(courses, id), {}];
    });

    $httpBackend.whenGET('/data/user/test.json').respond(
        {"userName": "test", "password": "test", "name": "Max", "emailAddress": "test@test.com"}
    );

    $httpBackend.whenPOST('/data/courses/saveItem').respond(function (method, url, course, headers) {
        console.log('Received these data:', method, url, data, headers);
        var Courses = localStorageService.get('courses');

        function getNextCourseId(events) {
            var max = 0;
            for (var idx = 0; idx < events.length; idx++) {
                if (events[idx].id > max) {
                    max = events[idx].id;
                }
            }
            return max + 1;
        }

        course.id = getNextCourseId(Courses);

        Courses.push(angular.fromJson(course));
        localStorageService.set('courses', Courses);
        return [200, {}, {}];
    });
});
