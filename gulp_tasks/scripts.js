const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');

const conf = require('../conf/gulp.conf');

gulp.task('scripts', scripts);

function isFixed(file) {
  // Has ESLint fixed the file contents?
  return file.eslint != null && file.eslint.fixed;
}

function scripts() {
  return gulp.src(conf.path.src('**/*.js'))
    .pipe(eslint({
      fix: true
    }))
    .pipe(gulpIf(isFixed, gulp.dest(conf.paths.src)))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}
