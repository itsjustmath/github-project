'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('primer', function () {
  return gulp.src('./node_modules/primer-css/build/build.css').pipe(gulp.dest('./build'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['primer', 'sass']);
});
