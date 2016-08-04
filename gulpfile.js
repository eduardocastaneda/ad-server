'use strict';

var gulp = require('gulp'),
    server = require('gulp-express')

gulp.task('server', function () { 
    server.run(['app.js'],[], false);
})

gulp.task('watch', function (){
  gulp.watch(['app.js', 'controllers/**/*.js'], [server.run]);
})

gulp.task('default', ['server','watch'])