/**
 * Created by Maksym_Kondratenko on 24.02.2016.
 */

(function () {

    myApp.config(function ($provide) {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
    }).run(function ($httpBackend, localStorageService) {
        var Courses = [
            {
                "id": 1,
                "name": "First",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                "date": "03.16.2013",
                "duration": "10",
                "models": {
                    lists: {
                        Authors: [
                            {label: "Author 1"},
                            {label: "Author 2"}
                        ]
                    }
                }
            },
            {
                "id": 2,
                "name": "Second",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                "date": "03.16.2013",
                "duration": "20",
                "models": {
                    lists: {
                        Authors: [
                            {label: "Author 3"},
                            {label: "Author 4"}
                        ]
                    }
                }
            }
        ];

        function getUrlVars(url) {
            var vars = {};
            url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
                vars[key] = value;
            });
            return vars;
        }

        function findById(courses, id) {
            for (var i = 0; i < courses.length; i++) {
                if (courses[i].id === id) {
                    return courses[i];
                }
            }
        }

        function getNextCourseId(courses) {
            var max = 0;
            for (var idx = 0; idx < courses.length; idx++) {
                if (courses[idx].id > max) {
                    max = courses[idx].id;
                }
            }
            return max + 1;
        }

        $httpBackend.whenGET('/partials/login.html').passThrough();
        $httpBackend.whenGET('/partials/course.html').passThrough();
        $httpBackend.whenGET('/partials/courses.html').passThrough();
        $httpBackend.whenGET('/partials/directives/authorsList.html').passThrough();
        $httpBackend.whenGET('/partials/modal.html').passThrough();
        $httpBackend.whenGET('/partials/confirmDeletion.html').passThrough();
        $httpBackend.whenGET('/data/user/test.json').respond(
            {"userName": "test", "password": "test", "name": "Max", "emailAddress": "test@test.com"}
        );
        $httpBackend.whenGET('/data/courses/getItems').respond(function () {
            if (localStorageService.isSupported && localStorageService.get('courses') && localStorageService.get('courses').length) {
                Courses = localStorageService.get('courses');
            } else {
                localStorageService.set('courses', Courses);
            }
            return [200, Courses, {}];
        });

        $httpBackend.whenGET(/\/data\/courses\/getItem\/?(.+)/).respond(function (method, url) {
            var courses = localStorageService.get('courses');
            var id = getUrlVars(url)['id'];
            var course = findById(courses, parseInt(id));
            console.log('Received these data:', method, url);
            return [200, course, {}];
        });

        $httpBackend.whenPOST('/data/courses/saveItem').respond(function (method, url, data) {
            console.log('Received these data:', method, url, data);
            var courses = angular.fromJson(localStorageService.get('courses'));
            var course = angular.fromJson(data);
            course.id = getNextCourseId(courses);
            courses.push(course);
            localStorageService.set('courses', courses);
            return [200, {}, {}];
        });

        $httpBackend.whenPOST(/\/data\/courses\/saveItem\/?(.+)/).respond(function (method, url, data) {
            console.log('Received these data:', method, url, data);
            var courses = localStorageService.get('courses');
            var course = angular.fromJson(data);

            if (course.id) {
                courses = courses.map(function (item) {
                    if (item.id === course.id) {
                        item = course;
                    }
                    return item;
                });
            } else {
                course.id = getNextCourseId(courses);
                courses.push(angular.fromJson(course));
            }

            localStorageService.set('courses', courses);
            return [200, {}, {}];
        });

        $httpBackend.whenDELETE(/\/data\/courses\/removeItem\/?(.+)/).respond(function (method, url, data) {
            var courses = angular.fromJson(localStorageService.get('courses'));
            var id = getUrlVars(url)['id'];
            var mapped = courses.filter(function (el) {
                return el.id != id;
            });
            localStorageService.set('courses', mapped);
            console.log('Received these data:', method, url, mapped);
            return [200, {courses: mapped}, {}];
        });
    });

})();
