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
    dest: build,
    dist: dist,
    sass: {
      includePaths: [
        bower_components+'bourbon/app/assets/stylesheets',
        bower_components+'neat/app/assets/stylesheets',
        src+'styles/'
      ]
    }
  },

  javascript: {
    source: src+'js/**/*',
    dest: build+'js/',
    dist: dist+'js/'
  },

  images: {
    source: src+'assets/**/*',
    dest: build+'assets/',
    dist: dist+'assets/'
  },

  templates: {
    source: [src+'**/*.html','!'+src+'layouts/*','!'+src+'chunks/*'],
    dest: build,
    dist: dist
  },

  watch: {
    source: {
      styles : src+'**/*.scss',
      templates : src+'**/*.html',
      javascript : src+'js/**/*'
    }
  },

  connect: {
    server: build,
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
