var gulp = require('gulp');

gulp.task('default', ['init','watch','connect']);
gulp.task('init', ['images','javascript','bower','styles','templates']);

gulp.task('dist', ['images:dist','javascript:dist','bower:dist','styles:dist','templates:dist']);
gulp.task('publish', ['clean:dist', 'dist', 'deploy']);
