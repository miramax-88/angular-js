'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

var path = {
    'all': './app/**/*.*'
};

gulp.task('connect', function () {
    connect.server({
        root: './app/',
        port: 8000,
        livereload: true
    });
});

gulp.task('annotate', function () {
    return gulp.src('app/!*.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('dist'));
});

gulp.task('concat', function() {
    return gulp.src(['!app/bower_components/**/', '!app/**/**_test.js', 'app/**/*.js'])
        /*.pipe(uglify())*/
        .pipe(concat('clientlibs.js'))
        .pipe(gulp.dest('./app/build/'))
        .pipe(connect.reload());
});

gulp.task('watch:all', function () {
    gulp.src(path.all)
        .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch(path.all, ['watch:all']);
});

gulp.task('default', ['connect', 'watch', 'annotate', 'concat']);
