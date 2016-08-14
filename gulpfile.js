'use strict';

var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('server', function () {
  var server = gls('app.js', {env: {NODE_ENV: 'development'}}, false);
  server.start();

  gulp.watch(['app.js', 'routes/**/*.js', 'lib/**/*.js'], function () {
    server.start.bind(server)();
  });
});

gulp.task('default', ['server']);
