// load the dev config
var config = require('./webpack.config.js');
var webpack = require('webpack');

// 线上环境压缩js
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
config.plugins.push(uglifyJsPlugin);

module.exports = config;