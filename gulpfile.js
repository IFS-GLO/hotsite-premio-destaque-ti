var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

var path = {
  'node': 'node_modules',
  'dist': 'theme/dist'
}

// scripts paths
var jsFiles = [
  path.node + '/jquery/dist/jquery.min.js',
  path.node + '/jquery-sticky/jquery-sticky.js',
  path.node + '/popper.js/dist/umd/popper.min.js',
  path.node + '/bootstrap/dist/js/bootstrap.min.js',
  path.node + '/sticky-kit/dist/sticky-kit.min.js',
  path.node + '/jquery-countdown/dist/jquery.countdown.min.js',
  path.node + '/owl.carousel/dist/owl.carousel.min.js',
  path.node + '/waypoints/lib/jquery.waypoints.min.js',
  path.node + '/counterup/jquery.counterup.min.js'
]

// styles path
var cssFiles = [
  path.node + '/bootstrap/dist/css/bootstrap.min.css',
  path.node + '/font-awesome/css/font-awesome.min.css',
  path.node + '/owl.carousel/dist/assets/owl.carousel.min.css',
  path.node + '/owl.carousel/dist/assets/owl.theme.default.min.css',
]

gulp.task('scripts', function () {
  return gulp.src(jsFiles)
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.dist + '/js'));
});

gulp.task('styles', function () {
  return gulp.src(cssFiles)
    .pipe(concat('all.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest(path.dist + '/css'))
});

gulp.task('fonts', function () {
  gulp.src(path.node + '/font-awesome/fonts/**.*')
    .pipe(gulp.dest(path.dist + '/fonts'));
});

gulp.task('default', ['styles', 'scripts', 'fonts']);
