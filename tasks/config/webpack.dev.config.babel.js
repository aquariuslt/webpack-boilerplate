/* Created by Aquariuslt on 14/04/2017.*/
import webpack from 'webpack';
import merge from 'webpack-merge';
import webpackBaseConfig from './webpack.base.config.babel';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';

import * as pathUtil from '../util/path-util';

const PROTOCOL = 'http://';
const HOST = 'localhost';
const PORT = 5000;


let webpackDevConfig = merge(webpackBaseConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: pathUtil.root('build'),
    publicPath: PROTOCOL + HOST + ':' + PORT,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.js.map',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      disable: true
    }),
    new FriendlyErrorsPlugin()
  ],
  devServer: {
    port: PORT,
    historyApiFallback: true,
    quiet: false,
    noInfo: true,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      children: false,
      timings: true,
      chunks: true,
      chunkModules: false
    }
  }
});

export default webpackDevConfig;
