const conf = require('./gulp.conf');
const wiredep = require('wiredep');

module.exports = function listFiles() {
  const wiredepOptions = Object.assign({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  });

  const patterns = wiredep(wiredepOptions).js.concat([
    conf.path.src('**/*.js')
  ]);

  const files = patterns.map(pattern => ({pattern}));
  files.push({
    pattern: conf.path.mocks('**/*.json'),
    included: false,
  });
  return files;
};
