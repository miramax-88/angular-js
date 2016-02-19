/**
 * Created by Maksym_Kondratenko on 19.02.2016.
 */
'use strict';

myApp.factory('courseData', function (coursesResource, authService) {
    return {
        getEvent: function(eventId, callback) {
            return coursesResource.get({id:eventId}, function(course) {
                if (callback)
                    callback(course);
            });
        },
        getAllEvents: function(callback) {
            return coursesResource.queryAll(callback);
        },
        getNextSessionId:function (course) {
            var max = 0;
            for (var idx = 0; idx < course.sessions.length; idx++) {
                if (course.sessions[idx].id > max) {
                    max = course.sessions[idx].id;
                }
            }
            return max+1;
        },
        save: function(course, callback) {
            if (course.id) {
                coursesResource.save(course, function() { if (callback) callback(); });
            } else {
                coursesResource.queryAll(function(events) {
                    course.creator = authService.getCurrentUserName();
                    course.id = getNextEventId(events);
                    course.sessions = [];
                    coursesResource.save(course);
                    if (callback)
                        callback();
                });
            }
        }
    };

    function getNextEventId(events) {
        var max = 0;
        for (var idx = 0; idx < events.length; idx++) {
            if (events[idx].id > max) {
                max = events[idx].id;
            }
        }
        return max+1;
    }
});
