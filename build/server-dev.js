const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.use(middleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.path
}));

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
