/* Created by Aquariuslt on 14/04/2017.*/

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as pathUtil from '../util/path-util';

let webpackBaseConfig = {
  entry: {
    main: './src/main.js',
    styles: './src/styles.css'
  },
  resolve: {
    extensions: [
      '.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [pathUtil.root('src')],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: pathUtil.root('src'),
        loader: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: ['style-loader']
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          useRelativePath: true,
          publicPath: './',
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file-loader',
        options: {
          useRelativePath: true,
          publicPath: './',
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        'main',
        'styles'
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

export default webpackBaseConfig;
