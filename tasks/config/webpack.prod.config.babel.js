/* Created by Aquariuslt on 14/04/2017.*/

import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import webpackBaseConfig from './webpack.base.config.babel';
import * as pathUtil from '../util/path-util';

let webpackProdConfig = merge(webpackBaseConfig, {
  devtool: 'source-map',
  output: {
    path: pathUtil.root('dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css'
    })
  ]
});

export default webpackProdConfig;
