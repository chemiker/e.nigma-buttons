var gulp = require('gulp'),
    concat = require('gulp-concat'),
    merge = require('merge-stream'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    stylesheet = 'src/stylesheets/screen.scss'
    php = 'src/enigma-buttons.php'

gulp.task('fonts', function() {
  return gulp.src(['node_modules/font-awesome/fonts/fontawesome-webfont.*'])
    .pipe(gulp.dest('fonts/'));
});

gulp.task('stylesheets', function() {
  var screen = gulp.src([stylesheet])
    .pipe(sass({ outputStyle: 'compressed' }));
  
  var fontawesome = gulp.src(['node_modules/font-awesome/css/font-awesome.min.css']);

  return merge(fontawesome, screen)
    .pipe(concat('screen.min.css'))
    .pipe(gulp.dest('stylesheets/'));
})

gulp.task('php', function() {
  return gulp.src(php)
    .pipe(gulp.dest('.'));
})

gulp.task('dev', function() {
  // Watch .scss files and render on changes
  gulp.watch([stylesheet, php], gulp.series('fonts', 'stylesheets', 'php') )
})

gulp.task('make', function () {
  gulp.series('fonts', 'stylesheets', 'php');
  gulp.src('fonts/*')
    .pipe(gulp.dest('dist/fonts/'));
  gulp.src('stylesheets/*')
    .pipe(gulp.dest('dist/stylesheets/'));
  gulp.src('src/assets/*')
    .pipe(gulp.dest('dist/assets/'));
  return gulp.src([php, 'src/readme.txt'])
    .pipe(gulp.dest('dist/'));
})