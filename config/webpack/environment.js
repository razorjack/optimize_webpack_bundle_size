const { environment } = require('@rails/webpacker')

const webpack = require('webpack')

environment.plugins.prepend(
  'MomentIgnoreLocales',
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
)

module.exports = environment
