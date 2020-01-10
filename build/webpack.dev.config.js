'use strict'
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config.js')


const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',  
  devtool: 'inline-source-map',  
  entry: {
    app: './src/index.js',
    // print: './src/print.js',
  },
  output: {
    filename: "[name].[hash].js",   // dev 环境只能使用hash, 不能使用 contenthash/chunkhash
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          'vue-style-loader',          
          'style-loader',
          'css-loader',     
          'sass-loader'
        ],
      },
    ]
  },
  plugins: [    
    // 热部署
    new webpack.HotModuleReplacementPlugin(),
    // 将css文件单独抽取出来
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
})


module.exports = devWebpackConfig