var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require('./package.json');

// Gather all node dependencies (without 'font') in their name
// ready to compile into a separate vendor script.
var vendorPackages = Object.keys(pkg.dependencies).filter(function (el) {
  return el.indexOf('font') === -1;
});
// Setup a var to allow us to compile our scripts using our 
// node package version number.
var outputFileTemplateSuffix = '-' + pkg.version;

module.exports = {
  entry: {
    main: './app/index', // Our 'main' script (the main application).
    vendor: vendorPackages // Our 'vendor' script (dependent packages).
  },
  output: {
    path: path.join(__dirname, 'dist'), // ?
    filename: '[name]' + outputFileTemplateSuffix + '.js', // ?
    chunkFilename: '[id]' + outputFileTemplateSuffix + '.js' // ?
  },
  plugins: [
    // Compile our 'vendor' packages into separate script.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor' + outputFileTemplateSuffix + '.js',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      __API_URL__: JSON.stringify(process.env.API_URL || '//localhost:49834/'),
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};