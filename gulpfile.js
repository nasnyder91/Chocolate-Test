const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// Logs Message
gulp.task('message', function(){
  return console.log('Gulp is running...');
});

// Copy all html files
gulp.task('copyHTML', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('docs'));
});

// Optimize Images
gulp.task('imageMin', () => {
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('docs/img'))
});

// Compile Sass
gulp.task('sass', () => {
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('docs/css'))
});

// Scripts
gulp.task('scripts', () => {
  gulp.src('src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('docs/js'));
});

gulp.task('default', ['message', 'copyHTML', 'imageMin', 'sass', 'scripts']);

gulp.task('watch', () => {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHTML']);
});
