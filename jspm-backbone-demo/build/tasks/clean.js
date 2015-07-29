var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', function() {
  return gulp.src([paths.output])
    .pipe(vinylPaths(del));
});

// deletes all files in the output path
gulp.task('clean-after-build', function() {
  return gulp.src([paths.bundle + ".*"])
    .pipe(vinylPaths(del));
});