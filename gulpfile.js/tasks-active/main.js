var gulp = require('gulp');

// `gulp`
gulp.task('default', ['init','watch','connect']);
gulp.task('init', ['images','javascript','bower','styles','templates']);

// `gulp work`
// Same as default but also opens Sublime and Chrome
gulp.task('work', ['default','sublime','openbrowser']);

// `gulp publish`
// Publishes to github pages
gulp.task('publish', ['clean:dist', 'dist', 'deploy']);
gulp.task('dist', ['images:dist','javascript:dist','bower:dist','styles:dist','templates:dist']);
