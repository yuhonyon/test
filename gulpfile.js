// gulp
const gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

const browserSync = require('browser-sync').create(),
    reload = browserSync.reload;
const spritesmith = require('gulp.spritesmith');



gulp.task('default', function() {
    gulp.run(['watch', 'browser-sync', 'css']);
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('images/icon*.png').pipe(spritesmith({
    imgName: './images/sprite.png',
    cssName: './sass/_sprite.scss',
    padding: 10
  }));
  return spriteData.pipe(gulp.dest('./'));
});

gulp.task('css', function() {
  return gulp.src('./sass/*.scss')
  .pipe($.sourcemaps.init())
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.px2rem({
      rootValue: 72,
      unitPrecision: 5,
      replace: true,
      minPx: 2
  }))
  .pipe($.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest('./css'))
  .pipe($.filter('**/*.css'))
  .pipe(browserSync.reload({ stream: true }));
});



gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['css']);

});



gulp.task('browser-sync', function() {
    let files = [
        './**/*.html',
        './**/*.css',
        './**/*.+(jpeg|jpg|png|gif)',
        './**/*.js',
        './**/*.json'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './',
            directory: true
        }
    });
});
