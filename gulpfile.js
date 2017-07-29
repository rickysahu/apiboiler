/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    mocha = require('gulp-mocha');

// runs the tests within the test folder
gulp.task('test', function () {
  var delay = 2;
  if (delay) { setTimeout(function(){
    return gulp.src(['test/*.js'], { read: false })
      .pipe(mocha({ reporter: 'spec' }))
      .on('error', gutil.log);
  }, delay * 1000); }
});

// linter using jshint for all js files in this app
gulp.task('lint', function () {
  gulp.src(["server.js", "controllers/**/*.js", 'models/**/*.js', 'views/**/*.js', 'test/*.js', 'utils/**/*.js'])
    .pipe(jshint({
      // project-wide jshint options
      node: true,
      esversion: 6,
      indent: 2,
      unused: false,
    }))
    .pipe(jshint.reporter(stylish))
});

// starts the server and restarts on any changes
gulp.task('server', function() {
    // configure nodemon
    nodemon({
      // the script to run the app
      script: 'server.js',
      // this listens to changes in any of these files/routes and restarts the application
      watch: ['server.js', 'controllers/', 'test/*.js', 'utils/'],
      ext: 'js',
      tasks: ['lint']
    }).on('restart', function() {
      gulp.src('server.js')
      gulp.run('test')
    }).on('finish', function() {
      console.log('ending')
    });
});
