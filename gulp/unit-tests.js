'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

gulp.task('test', function() { 

  var bowerDeps = wiredep({
    directory: 'src/app/bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    'src/app/scripts/**/*.js',
    'test/unit-test/**/*.js'
  ]);

  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'karma.conf.js',
      singleRun: true,
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });
});
