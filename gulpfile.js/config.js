/* ---------------------------------------
    CONFIG
   --------------------------------------- */

// Project paths
var src               = './src/';
var build             = './build/';
var dist              = './dist/';
var node_modules      = './node_modules/';
var bower_components  = './bower_components/';

module.exports = {
  styles: {
    source: src+'**/*.scss',
    build: build,
    dist: dist,
    sass: {
      includePaths: [
        bower_components,
        src+'styles/'
      ]
    }
  },

  javascript: {
    source: src+'js/**/*',
    build: build+'js/',
    dist: dist+'js/'
  },

  bower: {
    source: [bower_components+'dialog-polyfill/**/*.css',bower_components+'dialog-polyfill/**/*.js'],
    build: build+'vendor/',
    dist: dist+'vendor/'
  },

  images: {
    source: src+'assets/**/*',
    build: build+'assets/',
    dist: dist+'assets/'
  },

  templates: {
    source: [src+'**/*.html','!'+src+'layouts/*','!'+src+'chunks/*'],
    build: build,
    dist: dist
  },

  watch: {
    source: {
      styles : src+'**/*.scss',
      templates : src+'**/*.html',
      images : src+'assets/**/*',
      javascript : src+'js/**/*'
    }
  },

  connect: {
    server: build,
    host: 'localhost',
    port: '8080'
  },

  openbrowser: {
    url: 'http://localhost:8080',
    browser: 'google chrome'
  },

  clean: {
    all: [build, dist, './.sass-cache/'],
    build: build,
    dist: dist
  },

  dist: {
    deploy: dist
  }
}
