'use strict';

var gulp = require('gulp');

gulp.task('watch', ['consolidate', 'wiredep'] ,function () {
  gulp.watch('src/{app,components}/**/*.scss');
  gulp.watch('src/{app,components}/**/*.js');
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
  gulp.watch('src/{app,components}/**/*.hbs', ['consolidate:hbs']);
});
