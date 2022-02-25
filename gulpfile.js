const fs = require('fs')
const path = require('path')

const { series, watch, src, dest, parallel } = require('gulp')
const pump = require('pump')
const webpack = require('webpack-stream')

const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'

// gulp plugins and utils
var livereload = require('gulp-livereload')
var postcss = require('gulp-postcss')
const sass = require('gulp-sass')(require('sass'))
var zip = require('gulp-zip')
var uglify = require('gulp-uglify')
var beeper = require('beeper')

// postcss plugins
var autoprefixer = require('autoprefixer')
var colorFunction = require('postcss-color-function')
var cssnano = require('cssnano')
var customProperties = require('postcss-custom-properties')
var easyImport = require('postcss-easy-import')

function serve(done) {
  livereload.listen()
  done()
}

const handleError = (done) => {
  return function (err) {
    if (err) {
      beeper()
    }
    return done(err)
  }
}

function hbs(done) {
  pump([src(['*.hbs', '**/**/*.hbs', '!node_modules/**/*.hbs']), livereload()], handleError(done))
}

function css(done) {
  var processors = [
    easyImport,
    customProperties({ preserve: false }),
    colorFunction(),
    autoprefixer(),
    cssnano(),
  ]

  pump(
    [
      src('assets/css/*.css', { sourcemaps: true }),
      postcss(processors),
      dest('assets/built/', { sourcemaps: '.' }),
      livereload(),
    ],
    handleError(done)
  )
}

function scss(done) {
  const processors = [
    easyImport,
    customProperties({ preserve: false }),
    colorFunction(),
    autoprefixer(),
    cssnano(),
  ]

  pump(
    [
      src('src/scss/app.scss'),
      sass().on('error', sass.logError),
      postcss(processors),
      dest('assets/built/', { sourcemaps: '.' }),
      livereload(),
    ],
    handleError(done)
  )
}

function js(done) {
  pump(
    [
      src('assets/js/*.js', { sourcemaps: true }),
      uglify(),
      dest('assets/built/', { sourcemaps: '.' }),
      livereload(),
    ],
    handleError(done)
  )
}

function customJs(done) {
  pump(
    [
      src('src/js/app.js', { sourcemaps: true }),
      webpack({
        watch: false,
        mode: NODE_ENV,
        output: {
          filename: 'app.js',
        },
        devtool: isDev ? 'source-map' : false,
        resolve: {
          // 设置别名
          alias: {
            // 这样配置后 @ 可以指向 src 目录
            '@': path.resolve(__dirname, 'src'),
          },
        },
        module: {
          rules: [
            {
              test: /\.js$/, // 处理以.js结尾的文件
              exclude: /node_modules/, // 处理除了nodde_modules里的js文件
              loader: 'babel-loader', // 用babel-loader处理
            },
          ],
        },
      }),
      // uglify(),
      dest('assets/built/', { sourcemaps: '.' }),
      livereload(),
    ],
    handleError(done)
  )
}

function zipper(done) {
  var targetDir = 'dist/'
  var themeName = require('./package.json').name
  var themeVersion = require('./package.json').version
  var filename = `${themeName}-${themeVersion}.zip`

  pump(
    [
      src(['**', '!node_modules', '!node_modules/**', '!dist', '!dist/**']),
      zip(filename),
      dest(targetDir),
    ],
    handleError(done)
  )
}

const cssWatcher = () => watch('assets/css/**', css)
const scssWatcher = () => watch('src/scss/**', scss)
const hbsWatcher = () => watch(['*.hbs', '**/**/*.hbs', '!node_modules/**/*.hbs'], hbs)
const jsWatcher = () => watch('src/js/*.js', customJs)

const watcher = parallel(cssWatcher, hbsWatcher, scssWatcher, jsWatcher)
const build = series(css, js, customJs)
const dev = series(build, serve, watcher)

exports.build = build
exports.zip = series(build, zipper)
exports.default = dev
