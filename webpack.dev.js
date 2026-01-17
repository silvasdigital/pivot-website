const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  output: {
    publicPath: '/',
  },

  devServer: {
    watchFiles: ['src/**/*'],
    open: 'http://localhost:3000/',
    hot: true,
    port: 3000,
    liveReload: true,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      Pragma: 'no-cache',
      Expires: '0',
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
