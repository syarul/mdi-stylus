var gulp = require('gulp')
,	stylus = require('gulp-stylus')
,	stylint = require('gulp-stylint')
,	mdiStylus = require('./index')
,	shell = require('gulp-shell')

//extra converter from svg, need the git submodules, some conversion is not correct
gulp.task('convert', function () {
  return gulp.src('')
  .pipe(shell('icon-font mdi-git/icons/svg/*.svg ./font --font-family=Material Design Icons'));
});

gulp.task('clean', function () {
  return gulp.src('')
  .pipe(shell(['rm -rf test/*.css']));
});

gulp.task('test', function () {
    return gulp.src('test/*.styl')
        .pipe(stylint())
        .pipe(stylus({ use: [ 
        	mdiStylus()
        ]}))
        .pipe(gulp.dest('./test'))
});

gulp.task('default', ['clean', 'test']);