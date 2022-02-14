module.exports = function () {
    var output = '../server/markup/static/css/'
    $.gulp.task('sass', function () {
        return $.gulp.src('src/sass/style.sass')
            .pipe($.gp.sourcemaps.init())
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            // .pipe($.gp.csso())
            .pipe($.gp.sass({ outputStyle: 'expanded' }))
            // .pipe($.gp.sourcemaps.write('./'))
            .pipe($.gulp.dest(output))
            // Минифицированная версия
            .pipe($.gp.sass({ outputStyle: 'compressed' }))
            .pipe($.gp.rename('style.min.css'))
            .pipe($.gp.sourcemaps.write('./'))
            .pipe($.gulp.dest(output))
            .on('end', $.bs.reload);

        // .pipe($.bs.reload({
        //     stream:true
        // }));
    });
}
