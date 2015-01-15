'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var runSequence = require('run-sequence').use(gulp);

gulp.task('styles', ['wiredep'], function () {
  return gulp.src(['src/app/assets/index.scss', 'src/app/assets/vendor.scss'])
    .pipe($.sass({style: 'expanded'}))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe($.autoprefixer())
    .pipe(gulp.dest('.tmp/app/'));
});

gulp.task('jshint', function () {
  return gulp.src('src/app/scripts/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});

// gulp.task('partials', ['consolidate'], function () {
//   return gulp.src(['src/{app,components}/**/*.html', '.tmp/{app,components}/**/*.html'])
//     .pipe($.minifyHtml({
//       empty: true,
//       spare: true,
//       quotes: true
//     }))
//     .pipe($.angularTemplatecache('templateCacheHtml.js', {
//       module: 'myApp'
//     }))
//     .pipe(gulp.dest('.tmp/inject/'));
// });

// gulp.task('html', ['wiredep', function () {
//   var htmlFilter = $.filter('src/index.html');
//   var jsFilter = $.filter('src/app/assets/**/*.js');
//   var cssFilter = $.filter('{.tmp,src}/app/*/**.css');
//   var assets;

//   return gulp.src(['src/*.html', '.tmp/*.html'])
//     .pipe(assets = $.useref.assets())
//     .pipe($.rev())
//     .pipe(jsFilter)
//     .pipe($.ngAnnotate())
//     .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
//     .pipe(jsFilter.restore())
//     .pipe(cssFilter)
//     // .pipe($.replace('bower_components/bootstrap-sass-official/assets/fonts/bootstrap','fonts'))
//     .pipe($.csso())
//     .pipe(cssFilter.restore())
//     .pipe(assets.restore())
//     .pipe($.useref())
//     .pipe($.revReplace())
//     .pipe(htmlFilter)
//     .pipe($.minifyHtml({
//       empty: true,
//       spare: true,
//       quotes: true
//     }))
//     .pipe(htmlFilter.restore())
//     .pipe(gulp.dest('dist/'))
//     .pipe($.size({ title: 'dist/', showFiles: true }));

// });

gulp.task('html', ['wiredep'], function () {
  var htmlFilter = $.filter('*.html');
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');
  var assets;

  return gulp.src(['src/*.html', '.tmp/*.html'])
    
    .pipe(assets = $.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    // .pipe($.replace('bower_components/bootstrap-sass-official/assets/fonts/bootstrap','fonts'))
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest('dist/'))
    .pipe($.size({ title: 'dist/', showFiles: true }));
});


gulp.task('usemin', function() {

    gulp.src(['src/*.html'])
        .pipe($.usemin({
          css: [$.csso()],
          html: [$.htmlmin({collapseWhitespace: true})],
          js: [$.uglify(), $.rev()]
        }))
        .pipe(gulp.dest('dist'));
        // .pipe($.size({ title: 'dist/'}));

});

gulp.task('images', function () {
  return gulp.src('src/assets/images/**/*')
    .pipe($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('dist/assets/images/'));
});

gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('misc', function () {
  return gulp.src('src/app/*.ico')
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function (done) {
  $.del(['dist/', '.tmp/'], done);
});

gulp.task('build', function(){ 
  return runSequence('clean', 'styles', 'jshint', 'images', 'fonts', 'misc', 'html');
});

