'use strict'

const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config.js')

const componentConfig = merge(baseWebpackConfig, {
  mode: "production",
  devtool: 'source-map',
  entry:  {
    components: './src/component.js',
  },
  output: {
    path: path.resolve(__dirname, "../packages"),
    filename: "index.js",
    libraryTarget: "commonjs2"

  },
  externals: {
    Vue: 'vue'
  },  
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: (resourcePath, context) => {
              //   return path.relative(path.dirname(resourcePath), context) + '/'
              // },
              esModule: true
            }
          },
          // 'vue-style-loader',
          // 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    // 对代码进行压缩
    new UglifyPlugin({
      sourceMap: true
    }),
    // 定义环境变量，使其能够在项目中使用
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // 将css文件单独抽取出来
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:7].css',
      chunkFilename: '[id].[contenthash:7].css'
    })
  ]
})

module.exports = componentConfig