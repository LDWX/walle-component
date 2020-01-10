'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // 提取公共引用包
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: { // 将node_modules中的引用包打包在一起
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env'],
          //   plugins: ['@babel/plugin-proposal-object-rest-spread']
          // }
        }
      },
      {
        test: /\.vue/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 清除上次打包的代码
    new CleanWebpackPlugin(),
    // 为chunk命名
    new webpack.NamedChunksPlugin(),
    // 自动将html与js关联起来
    new HtmlWebpackPlugin({
      title: 'Output Mangement',
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new VueLoaderPlugin()
  ]
}