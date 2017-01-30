const path = require('path');

const del = require('del');
const gulp = require('gulp');
const configSync = require('gulp-config-sync');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('sync', sync);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function sync() {
  return gulp.src(['bower.json'])
    .pipe(configSync({
      fields: ['version', 'description', 'keywords', 'repository']
    }))
    .pipe(gulp.dest('.'));
}
