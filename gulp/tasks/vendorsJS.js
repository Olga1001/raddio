const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  // 'dev/js/renderers/*.js',
  // 'dev/js/lang/*.js'
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('dist/js/'))
    : cb();
};
