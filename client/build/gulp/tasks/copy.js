module.exports = function() {
    $.gulp.task('copy', function() {
        return $.gulp.src('./src/public/**/*')
            .pipe($.gulp.dest('../server/markup/static/'))
    });
}
