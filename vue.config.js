const isProduction = process.env.NODE_ENV === 'production'
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {
  publicPath: isProduction ? './' : '/',
  productionSourceMap: false,
  devServer: {},
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack: config => {
    if (isProduction) {
      // 生产环境
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
  }
}
