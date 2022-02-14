module.exports = function() {
    $.gulp.task('watch',function(){
        // $.gulp.watch('src/pug/templates/**/*.pug',$.gulp.series('pug'));
      $.gulp.watch('./src/pug/templates/**/*.html',$.gulp.series('pug'));
      $.gulp.watch(['src/sass/**/*.scss', 'src/sass/**/*.sass'],$.gulp.series('sass'));
      $.gulp.watch('./src/public/**/*',$.gulp.series('copy'));
    });
}
