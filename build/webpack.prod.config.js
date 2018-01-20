const path = require('path');
const baseConfig = require('./webpack.base.config.js');
const distPath = path.join(__dirname, "../dist");

baseConfig.output = {
    path: distPath,
    publicPath: '/',
    filename: 'bundle.js',
};

module.exports = baseConfig;
