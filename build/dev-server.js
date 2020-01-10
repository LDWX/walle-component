const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.dev.config.js')
const options ={
  contentBase: '../dist',
  hot: true,
  compress: true
}
// devServer: {
//   contentBase: path.join(__dirname, 'dist'),
//   compress: true,
//   port: 9000,
//   hot: true
// },

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

// 这里指定了域名和端口号
server.listen(8765, 'localhost', () => {
  console.log('dev server listening on port 8765')
})