var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ngToolsWebpack = require('@ngtools/webpack');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack',
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'assets', 'css'),
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader'
        })
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        htmlLoader: {
         minimize: false // workaround for ng2
        }
      }
    }),
    new ExtractTextPlugin('assets/css/[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new ngToolsWebpack.AotPlugin({
      tsConfigPath: helpers.root('tsconfig.json'),
      entryModule: helpers.root('src', 'app', 'app.module#AppModule'),
      mainPath: helpers.root('src', 'app', 'main.ts')
    })
  ]
});
