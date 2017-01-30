const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const conf = require('../conf/gulp.conf');

gulp.task('build', build);

function build() {
  return gulp.src(conf.path.src('**/*.js'))
    .pipe(sourcemaps.init())
    .pipe(concat('ng-statuspage.js'))
    .pipe(gulp.dest(conf.paths.dist))
    .pipe(uglify())
    .pipe(rename('ng-statuspage.min.js'))
    .pipe(gulp.dest(conf.paths.dist));
}
