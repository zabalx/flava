const webpack = require('webpack');
const path = require('path');

var R = {
  src: './src/',
  dest: '../server/markup/static/',
};
var p = {
  src: {
      js: `${R.src}js/`,
  },
  dest: {
      js: `${R.dest}js/`,
  },
}


const JS_DEV = path.resolve(p.src.js);
const JS_DIST = path.resolve(p.dest.js);

const webpackConfig = {
  mode: 'development',

  context: JS_DEV,
  entry: {
    app: [
      './main.js',
    ],
  },
  output: {
    path: JS_DIST,
    filename: 'main.js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
  resolve: {
    modules: [
      JS_DEV,
      'node_modules',
    ],
    extensions: ['.js', '.json'],
  },
  plugins: [],
};

/** Modifies webpackConfig depends on mode. */

webpackConfig.devtool = 'inline-source-map';

module.exports = webpackConfig;