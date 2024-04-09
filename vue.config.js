const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  devServer: {
    port: 81,
    https: false,
    open: false
  },
  publicPath: '/im/',
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css$/,
        filename: '[path].gz[query]',
        minRatio: 1,
        threshold: 10240,
        deleteOriginalAssets: false
      })
    ]
  }
}
