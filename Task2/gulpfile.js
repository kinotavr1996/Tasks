'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./stylesheets'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('clean',function(){
    return del('css');
});

gulp.task('build', ['clean','sass','sass:watch']);

gulp.task('default', ['build']);
