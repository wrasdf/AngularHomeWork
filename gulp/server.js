'use strict';

var gulp = require('gulp');

var util = require('util');

var browserSync = require('browser-sync');

var middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser) {

  browser = browser === undefined ? 'default' : browser;

  return browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      middleware: middleware
    },
    browser: browser
  });

}

gulp.task('serve', ['styles', 'partials', 'watch'], function () {
  return browserSyncInit([
    '.tmp',
    'src'
  ], [
    '.tmp/app/*.css',
    'src/app/**/*.js',
    'src/assets/images/**/*',
    '.tmp/*.html',
    'src/app/*.html',
    'src/app/view/*.html'
  ]);
});

gulp.task('serve:dist', function () {  
  return gulp.start("build", function(){
    browserSyncInit('dist');
  });
});

gulp.task('serve:e2e',  function () {  
  return browserSyncInit(['.tmp', 'src'], null, []);
});

gulp.task('serve:e2e-dist',  function () {
  return gulp.start("build", function(){
    return browserSyncInit('dist', null, []);
  });
});
