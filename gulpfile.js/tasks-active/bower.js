var gulp      = require('gulp');
var config    = require('../config').bower;

gulp.task('bower', function() {
  gulp.src(config.source)
    .pipe(gulp.dest(config.build));
});

gulp.task('bower:dist', ['clean:dist'], function() {
  return gulp.src(config.source)
    .pipe(gulp.dest(config.dist));
});
