var R = {
    src: './src/',
    dest: '../server/markup/',
};
var p = {
    src: {
        pug: `${R.src}pug/`,
    },
    dest: {
        pug: `${R.dest}templates/`,
    },
}

var template_src = [
    `${p.src.pug}templates/**/*.pug`,
    `!${p.src.pug}templates/**/_*.pug`,
  ]
var baseDir =  `${p.src.pug}templates/`
var changed = require('gulp-changed')
var rename = require('gulp-rename')
var pugCompiler = require('pug')
const pug = require('gulp-pug')

module.exports = function() {
    // $.gulp.task('pug', function() {
    //     return $.gulp.src(template_src)
    //         .pipe(changed(baseDir, {
    //         extension: '.html',
    //         dest: p.dest.pug
    //         }))
    //         // .pipe(puglint(pugLintConfig))
    //         .pipe(pug({
    //             pretty: true,
    //             debug: false,
    //             doctype: 'html',
    //             pug: pugCompiler,
    //             basedir: baseDir,
    //         }))
    //         .pipe(rename({
    //         extname: '.html',
    //         }))
    //     .pipe($.gulp.dest(p.dest.pug))
    //     .on('end', () => {})
    // });
    $.gulp.task('pug', function() {
        return $.gulp.src(`${p.src.pug}templates/**/*.html`)
            .pipe($.gulp.dest(p.dest.pug))
    });
}
