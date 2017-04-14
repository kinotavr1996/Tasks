'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-uglify');


gulp.task('sass', function () {
gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./stylesheets'))
});

gulp.task('js', function() {
  gulp.src('./scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(minify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('minjs'))
});


gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('clean',function(){
    del('stylesheets');
    del('minjs');
    return true;
});

gulp.task('build', ['clean','sass','js','sass:watch']);

gulp.task('default', ['build']);
