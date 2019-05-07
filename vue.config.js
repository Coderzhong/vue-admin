const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: isProduction ? './' : '/',
  productionSourceMap: false,
  devServer: {}
}
