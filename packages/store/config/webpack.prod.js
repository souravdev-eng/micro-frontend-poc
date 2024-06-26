const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/store/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'store',
      filename: 'remoteEntry.js',
      exposes: {
        './store': './src/store',
      },
      shared: packageJson?.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
