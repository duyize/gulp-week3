var gulp = require('gulp');
var webserver = require('gulp-webserver');
var less = require('gulp-less');

gulp.task('less',function(){
    gulp.src(['src/less/*'])
    .pipe(less())
    .pipe(gulp.dest('./src/css'))
});

gulp.task('watch',function(){
    gulp.src('./src/less/*',['less'])
});

gulp.task('webserver',function(){
    gulp.src('src')
    .pipe(webserver({
        port : 3333,
        open : true,
        middleware : {

        }
    }));
});

gulp.task('default',['less','webserver','watch'],function(){

});