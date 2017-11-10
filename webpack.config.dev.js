/* eslint-env node */
const DashboardPlugin = require('webpack-dashboard/plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./webpack.config.sofe.js');

config.plugins.push(new DashboardPlugin());

// config.plugins.push(
// 	new BundleAnalyzerPlugin({
// 		analyzerPort: 1212
// 	})
// );

module.exports = config;
