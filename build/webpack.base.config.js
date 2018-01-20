const path = require('path');
const webpack = require('webpack');
const srcPath = path.join(__dirname, "../src");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: srcPath,
  entry: './main',
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
};
