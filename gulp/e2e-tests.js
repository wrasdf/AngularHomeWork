'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync');

// Downloads the selenium webdriver
gulp.task('webdriver-update', $.protractor.webdriver_update);

gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

function runProtractor (done) {
  gulp.src(['test/e2e/**/*.js'])
    .pipe($.protractor.protractor({
      configFile: 'protractor.conf.js',
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
    
}

gulp.task('protractor', ['protractor:src']);
gulp.task('protractor:src', function(){
  return gulp.start(['webdriver-update', 'serve:e2e'], function(){
    runProtractor();
  });
});
// gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);
// gulp.task('protractor:dist', function(){
//   return gulp.start(['webdriver-update', 'serve:e2e-dist'], function(){
//     runProtractor();
//   });
// });
