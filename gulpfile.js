const path = require('path')
const gulp = require('gulp')
const clean = require('gulp-clean') //For Cleaning build/dist for fresh export
const browserSync = require('browser-sync').create()
const { series, watch, src, dest, parallel } = require('gulp')
const pump = require('pump')
const webpack = require('webpack-stream')

const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'

// Gulp plugins and utils
const livereload = require('gulp-livereload')
const postcss = require('gulp-postcss')
// const sass = require('gulp-dart-sass')
const sass = require('gulp-sass')(require('sass')) //For Compiling SASS files
const concat = require('gulp-concat') //For Concatinating js,css files
const zip = require('gulp-zip')
const uglify = require('gulp-uglify')
const beeper = require('beeper')
const notify = require('gulp-notify')

const cssnano = require('cssnano')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const easyImport = require('postcss-easy-import')
const customProperties = require('postcss-custom-properties')
const colorFunction = require('postcss-color-function')

// Helper function to handle errors with notifications
const handleError = (done) => {
  return function (err) {
    if (err) {
      notify.onError({
        title: 'Gulp Task Error',
        message: 'Error: <%= error.message %>',
      })(err)
      beeper()
    }
    return done(err)
  }
}

// Livereload server
function serve(done) {
  livereload.listen()
  done()
}

// Handlebars task
function hbs(done) {
  pump([src(['*.hbs', '**/**/*.hbs', '!node_modules/**/*.hbs']), livereload()], handleError(done))
}

function scss(cb) {
  pump(
    [
      src('src/styles/screen.scss'),
      sass().on('error', sass.logError),
      postcss([
        postcssImport(),
        tailwindcss(),
        autoprefixer(),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        customProperties({ preserve: false }),
        colorFunction(),
        cssnano(),
      ]),
      gulp.dest('assets/built/', { sourcemaps: isDev ? '.' : false }),
    ],
    handleError(cb), // 使用 handleError 捕获错误
  )
}

// function devStyles() {
//   const tailwindcss = require('tailwindcss')
//   const autoprefixer = require('autoprefixer')
//   return (
//     src(`src/styles/screen.scss`)
//       .pipe(sass().on('error', sass.logError))
//       .pipe(postcss([tailwindcss(), autoprefixer()]))
//       // .pipe(concat({ path: 'style.css' }))
//       .pipe(dest('assets/built/', { sourcemaps: isDev ? '.' : false }))
//   )
// }

// JavaScript minification task for regular JS files
function js(done) {
  pump(
    [
      src('assets/js/*.js', { sourcemaps: isDev }),
      uglify(),
      dest('assets/built/', { sourcemaps: isDev ? '.' : false }),
      livereload(),
    ],
    handleError(done),
  )
}

// Custom JavaScript task with Webpack and Babel
function customJs(done) {
  pump(
    [
      src('src/js/app.js', { sourcemaps: isDev }),
      webpack({
        mode: NODE_ENV,
        output: {
          filename: 'app.js',
        },
        devtool: isDev ? 'source-map' : false,
        resolve: {
          alias: {
            '@': path.resolve(__dirname, 'src'),
          },
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
            },
          ],
        },
      }),
      !isDev ? uglify() : null, // Only uglify in production
      dest('assets/built/', { sourcemaps: isDev ? '.' : false }),
      livereload(),
    ].filter(Boolean), // Filter out null when uglify is skipped
    handleError(done),
  )
}

// function customJs(done) {
//   const webpackConfig = {
//     mode: NODE_ENV,
//     entry: './src/js/app.js',
//     output: {
//       filename: 'app.js',
//       path: path.resolve(__dirname, 'assets/built'),
//     },
//     devtool: isDev ? 'source-map' : false,
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, 'src'),
//       },
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//             },
//           },
//         },
//       ],
//     },
//     plugins: [new webpack.ProgressPlugin()],
//   }

//   if (!isDev) {
//     webpackConfig.optimization = {
//       minimize: true,
//     }
//   }

//   return src('src/js/app.js')
//     .pipe(webpack(webpackConfig))
//     .pipe(dest('assets/built/'))
//     .pipe(livereload())
//     .on('error', handleError(done))
// }

// Zip the theme for deployment
function zipper(done) {
  const targetDir = 'dist/'
  const themeName = require('./package.json').name
  const themeVersion = require('./package.json').version
  const filename = `${themeName}-${themeVersion}.zip`

  pump(
    [src(['**', '!node_modules', '!node_modules/**', '!dist', '!dist/**']), zip(filename), dest(targetDir)],
    handleError(done),
  )
}

// Watcher tasks
const scssWatcher = () => watch(['*.hbs', '**/**/*.hbs', 'src/styles/**'], scss)
const hbsWatcher = () => watch(['*.hbs', '**/**/*.hbs', '!node_modules/**/*.hbs'], hbs)
const jsWatcher = () => watch('src/js/*.js', customJs)

// Run watchers in parallel
const watcher = parallel(hbsWatcher, scssWatcher, jsWatcher)

// Build tasks
const build = series(scss, js, customJs)
const dev = series(build, serve, watcher)

// Export tasks
exports.build = build
exports.zip = series(build, zipper)
exports.default = isDev ? dev : build
