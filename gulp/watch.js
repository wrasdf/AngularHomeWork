'use strict';

var gulp = require('gulp');

gulp.task('watch',function () {
  gulp.watch('src/app/assets/*.scss', ['styles']);
  gulp.watch('src/app/scripts/**/*.js');
  gulp.watch('src/app/assets/images/**/*', ['images']);
  gulp.watch('src/app/views/**/*.html', ['partials']);
});
