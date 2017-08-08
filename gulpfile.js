var gulp = require('gulp')
,	stylus = require('gulp-stylus')
,	stylint = require('gulp-stylint')
,	mdiStylus = require('./index')
,	shell = require('gulp-shell')
,	webfont = require('gulp-webfont')

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


var webfont_config = {
	font: 'testto',
    types:'woff',
    // ligatures: true
}

gulp.task('conv', function () {
  return gulp.src('new_svg/*.svg')
    .pipe(webfont(webfont_config))
    .pipe(gulp.dest('fonts'));
})

gulp.task('default', ['clean', 'test']);