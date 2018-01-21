const path = require('path');
const rootPath = path.join(__dirname, "../");
const middleware = require('webpack-dev-middleware');
const webpackConfig = require(rootPath + '/build/webpack.dev.config');
const compiler = require('webpack')(webpackConfig);
const express = require('express');
const app = express();
const env = process.env.NODE_ENV;
const webpackHotMiddleware = require("webpack-hot-middleware");

if (env !== "production") {
    app.use(middleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));

    app.get("/", (req, res, next) => {
        const filename = path.join(__dirname, "../dist/index.html");
        compiler.outputFileSystem.readFile(filename, (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
} else {
    app.use('/dist', express.static(rootPath + '/dist'));

    app.get("/", (req, res) => {
        return res.sendFile('index.html', { root: rootPath + '/dist' });
    });
}

app.listen(3000, () => console.log('Server listening on port 3000!'));
