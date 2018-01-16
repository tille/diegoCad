const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();
const path = require('path');
const rootPath = path.join(__dirname, "../");

app.use('/static', express.static(rootPath + 'dist'));

app.use(middleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.path
}));

app.get("/", (req, res) => {
    return res.sendFile('index.html', { root: rootPath });
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
