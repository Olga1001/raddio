const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsStyles = [
    'dev/vendor/mediaelementplayer.min.css',
];

module.exports = function vendors(cb) {
  return vendorsStyles.length
    ? gulp.src(vendorsStyles)
      .pipe(concat('libs.css'))
      .pipe(gulp.dest('dist/css/'))
    : cb();
};
