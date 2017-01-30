const path = require('path');

const gulp = require('gulp');
const HubRegistry = require('gulp-hub');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('/*.js')]);
// const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('test', gulp.series('scripts', 'karma:single-run'));
gulp.task('test:auto', gulp.series('watch', 'karma:auto-run'));
gulp.task('build', gulp.series('scripts', 'build'));
gulp.task('default', gulp.series('clean', 'sync', 'build'));
