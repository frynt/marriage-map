var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var usemin = require('gulp-usemin');
var ignore = require('gulp-ignore');
var rev = require('gulp-rev');
var minjs = require('gulp-jsmin');
var mincss = require('gulp-cssmin');
var zip = require('gulp-zip');
var runSequence = require('gulp-run-sequence');

var bases = {
 app: 'src/',
 dist: 'dist/'
};

var paths = {
 html: ['index.html'],
 all: [bases.app + '**']
};

// Delete the dist directory
gulp.task('clean', function() {
 return gulp.src(bases.dist)
 .pipe(debug({title: 'clean src :'}))
 .pipe(clean());
});

// Copy tout sauf les js et css dans le dist directory
gulp.task('copyAllExceptJSandCSS', [], function() {
 return gulp.src(paths.all)
  .pipe(ignore.exclude('*.js'))
  .pipe(ignore.exclude('*.css'))
  .pipe(debug({title: 'copyTemplates src :'}))
  .pipe(gulp.dest(bases.dist));
});

// Concatene, minifie, fait en sorte que index.html pointe sur ces nouveaux fichiers.
gulp.task('usemin', [], function() {
 return gulp.src(bases.app + "index.html")
    .pipe(usemin({
      html: [],
      js: [rev, minjs],
      css : [rev, mincss]
    }))
    .pipe(debug({title: 'usemin pipe :'}))
    .pipe(gulp.dest(bases.dist));
});

// Fait un zip du dist
gulp.task('zip', [], function() {
 return gulp.src(bases.dist + "/**")
  .pipe(zip('marriage-map.zip'))
  .pipe(gulp.dest('deploy/delivery'));
});


// Production d'un zip pour déploiement.
gulp.task('install', [] , function() {
  runSequence(
    'clean',
    ['copyAllExceptJSandCSS', 'usemin'],
    'zip'
  );
});

//Secure
//stp.strato.com
//florange@1001nuits.biz
//marriagemap2015