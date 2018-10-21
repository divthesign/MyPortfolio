const gulp = require('gulp');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const minifyHTML = require('gulp-htmlmin')

gulp.task('default', function() {
  // place code for your default task here
}); 
gulp.task('compressJs', function() {
  gulp.src(['src/*.js', 'src/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});

gulp.task('minify-css', () => {
  return gulp.src('dist/css/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(gulp.dest('dist'));
});
gulp.task('minify-html', () => {
  return gulp.src('*.html')
    .pipe(minifyHTML({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});
gulp.task('default', ['compressJs', 'minify-css', 'minify-html']);



