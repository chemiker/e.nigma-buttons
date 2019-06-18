var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename');

var dest = './dist';
var paths = {
  stylesheets: ['./src/stylesheets/*.scss']
};

gulp.task('fonts', function() {
  return gulp.src(['bower_components/font-awesome/fonts/fontawesome-webfont.*'])
    .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('fontawesome', function() {
  return gulp.src(['bower_components/font-awesome/css/font-awesome.css'])
    .pipe(concat('fontawesome.scss'))
    .pipe(gulp.dest('src/stylesheets/'));
});

gulp.task('stylesheets', function() {
  return gulp.src(paths.stylesheets)
    .pipe(compass({
    	css: 'dist/stylesheets',
    	sass: 'src/stylesheets',
    	style: 'compressed'
    }))
    .pipe(gulp.dest('dist/stylesheets'))
})

gulp.task('default', gulp.series('fontawesome', 'fonts', 'stylesheets') )

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch(paths.stylesheets, gulp.series('fontawesome', 'fonts', 'stylesheets') )
})
