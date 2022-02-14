'use strict';

/* Plugins
********************
gulp-load-plugins
gulp-pug
gulp-sass
gulp-csso
gulp-notify
gulp-autoprefixer
gulp-sourcemaps
gulp-browserSync
gulp-concat
*/

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});


$.gulp.task('default', 
  $.gulp.series('pug','sass', 'copy',
    done => {
      $.gulp.watch('./src/pug/templates/**/*.html',$.gulp.series('pug'));
      $.gulp.watch(['src/sass/**/*.scss', 'src/sass/**/*.sass'],$.gulp.series('sass'));
      $.gulp.watch('./src/public/**/*',$.gulp.series('copy'));
      done()
    }
  )
)

$.gulp.task('build',$.gulp.series(
    $.gulp.parallel('pug','sass', 'copy' )
));
