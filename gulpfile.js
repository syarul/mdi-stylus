const gulp = require('gulp')
const stylus = require('gulp-stylus')
const stylint = require('gulp-stylint')
const mdiStylus = require('./index')
const shell = require('gulp-shell')

gulp.task('clean', () =>
  gulp.src('')
  .pipe(shell(['rm -rf test/*.css']))
)

gulp.task('test', () =>
  gulp.src('test/*.styl')
      .pipe(stylint())
      .pipe(stylus({ use: [ 
        mdiStylus()
      ]}))
      .pipe(gulp.dest('./test'))
)

// rename null.svg to icon-null.svg ***needed***
gulp.task('rem', () =>
  gulp.src('')
    .pipe(shell('mv node_modules/@mdi/svg/svg/null.svg node_modules/@mdi/svg/svg/icon-null.svg'))
)

gulp.task('move', () =>
  gulp.src('new_svg/*.svg')
    .pipe(gulp.dest('node_modules//@mdi/svg/svg'))
)

gulp.task('default', ['clean', 'test'])
