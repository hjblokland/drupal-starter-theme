const { merge } = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base.config.js');
const devConfig = require('../config/config');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  devtool: 'cheap-module-source-map',
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc'
    }),
    new BrowserSyncPlugin({
      port: 3000,
      open: false,
      proxy: {
        target: devConfig.browsersyncTarget
      }
    })
  ]
});
