var gulp = require('gulp'),
    connect = require('gulp-connect');

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

gulp.task('watch:all', function(){
    gulp.src(path.all)
        .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch(path.all,       ['watch:all']);
});

gulp.task('default', ['connect', 'watch']);
