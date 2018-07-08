const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require("babelify");
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const del = require('del');

const directory = './public';

//cleaning public directory
gulp.task('clean', function () {
    del.sync([directory + '/**']);
});

// JS
gulp.task('js', function() {
    return browserify('./src/js/app.js', {debug: true})
        .transform(babelify, {
            presets: ['es2015', 'react', 'stage-0'],
            sourceMaps: true,
        })
        .bundle()
        .on('error', function (err) {
            console.error(err);
            this.emit('end');
        })
        .pipe(source('bundle.min.js'))
        .pipe(buffer())
        .pipe(gulp.dest(directory + '/js'))
});


// HTML
gulp.task('html', function() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest(directory))
});


gulp.task('reload:js', ['js'], browserSync.reload);
gulp.task('reload:html', ['html'], browserSync.reload);
gulp.task('watch', ['build'], function() {
    browserSync({
        notify: true,
        logPrefix: 'BS',
        proxy: `localhost:3200`
    });

    gulp.watch('./src/js/**/*.*', ['reload:js'])
    gulp.watch('./src/*.html', ['reload:html'])
});

gulp.task('build', [
    'clean',
    'js',
    'html',
]);

gulp.task('default', [
    'watch',
]);