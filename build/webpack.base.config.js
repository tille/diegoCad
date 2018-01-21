const path = require('path');
const webpack = require('webpack');
const srcPath = path.join(__dirname, "../src");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const distPath = path.join(__dirname, "../dist");

module.exports = {
  context: srcPath,
  entry: ['webpack-hot-middleware/client', './main'],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  output: {
    path: distPath,
    publicPath: distPath,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
};
