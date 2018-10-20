var gulp = require('gulp');
const minify = require('gulp-minify');

gulp.task('default', function() {
  // place code for your default task here
});
 
gulp.task('compress', function() {
  gulp.src(['lib/*.js', 'lib/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});