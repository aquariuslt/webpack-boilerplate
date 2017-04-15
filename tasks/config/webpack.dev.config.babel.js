/* Created by Aquariuslt on 14/04/2017.*/

import merge from 'webpack-merge';
import webpackBaseConfig from './webpack.base.config.babel';
import * as pathUtil from '../util/path-util';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

const PROTOCOL = 'http://';
const HOST = 'localhost';
const PORT = 5000;


let webpackDevConfig = merge(webpackBaseConfig, {
  devtool: 'source-map',
  output: {
    path: pathUtil.root('build'),
    publicPath: PROTOCOL + HOST + ':' + PORT,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.js.map',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css'
    })
  ],
  devServer: {
    port: PORT,
    historyApiFallback: true,
    quiet: true,
    noInfo: true,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }
});

export default webpackDevConfig;
