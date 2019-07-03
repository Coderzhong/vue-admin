const isProduction = process.env.NODE_ENV === 'production'
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {
  publicPath: isProduction ? './' : process.env.VUE_APP_BASE_URL, // 根据项目的实际情况配置 https://cli.vuejs.org/zh/config/#baseurl
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.105.100.61'
      }
    }
  },
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
