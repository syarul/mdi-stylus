# mdi-stylus
[Material Design Icons](https://materialdesignicons.com/) port to stylus

[![Build Status](https://travis-ci.org/syarul/mdi-stylus.svg)](https://travis-ci.org/syarul/mdi-stylus)

allowing icons to be selectively chosen
or included all at once.

## Installation

```
npm install mdi-stylus --save
```

## Initialization

### Initial( if you need custom fonts)

You need to install font forge and set to environment variables or use the `node engine` option if it work for you

Run ```git submodules update``` to get latest material design svg files, you can add new svg icons as needed

modify `Gruntfile.js` to compile `template_styl_variables` and copy the generated ```icon.styl```

into ```mdi-stylus\icons\variables.styl```. If you need to view demo run the `template_html_demo` from the `Gruntfile.js`

### Set up compiler to use `mdi-stylus`

Use gulp, grunt, or similar and configure your stylus to include `mdi-stylus` in the `use` option.
For example, with gulp:

```javascript
var mdiStylus = require("mdi-stylus");

gulp.task('main', function () {
  return gulp.src('./templates/stylus/main.styl')
    .pipe(stylus({
      use: [
        mdiStylus(),
      ],
      compress: false,
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
});
```

Then import `mdi-stylus` in your stylus file.

```styl
@import 'mdi-stylus'
```

## Configuration

The variables used by mdi-stylus are set by the library only if not already set.
That means to override them you must set them before importing mdi-stylus.

See [`variables.styl`](mdi-stylus/icons/variables.styl) for full details.

### Font path

The font path is set to `../fonts` by default,
but this may not be suitable for your project.
For example, if the fonts will be available at paths like `/fonts/materialdesignicons-webfont.woff`,
it can be overridden with stylus code like the following:

```styl
$mdi-font-path = '/fonts'
@import 'mdi-stylus'
```

The fonts can be moved to this location (usually `public` or `dist`)
as part of your build process;
for example with gulp you can do:

```javascript
var filesToMove = [
  './node_modules/mdi/fonts/**/*.*',
];

gulp.task('move', ['clean'], function () {
  return gulp.src(filesToMove)
    .pipe(gulp.dest('./dist/fonts'));
});
```

As alternative example, if you want the fonts in a subdirectory
and your server follows symlinks, you can do:

```
cd dist/fonts
ln -s ../../node_modules/mdi/fonts material-design-icons
```

And then configure `$mdi-font-path = '/fonts/material-design-icons'` in your stylus.

## Usage

```styl
// Use individual icons
.{$mdi-css-prefix}-star
  mdi-icon 'star'

// Or import a list of icons in a loop
.{$mdi-css-prefix}
  for $icon in star account adjust
    &-{$icon}
      mdi-icon $icon

// Or import all icons
import-all-icons()
```

## Test

```
npm install
gulp
```

## Important notes

- The icon `null` has been renamed to `icon-null`, to work around a parse error
  caused by stylus interpreting it as null.
