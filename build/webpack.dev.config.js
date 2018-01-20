const baseConfig = require('./webpack.base.config.js');

baseConfig.output = {
    path: '/',
    publicPath: '/',
    filename: 'bundle.js',
};

module.exports = baseConfig;
