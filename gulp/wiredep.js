'use strict';

var gulp = require('gulp');

var wiredep = require('wiredep').stream;

var clip = require('gulp-clip-empty-files');

// inject bower components
gulp.task('wiredep', function () {
  return gulp.src('app/*.html')
    .pipe(clip())
    .pipe(wiredep({
      directory: 'app/bower_components'
    }))
    .pipe(gulp.dest('app'));
});
