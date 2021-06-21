const { merge } = require('webpack-merge');
const UglifyJsPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        terserOptions: {
          mangle: false,
        },
      }),
      new CssMinimizerPlugin()
    ]
  }
})
