// dev-server.js
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.dev.js');
var path = require('path');
var app = express();

// webpack编译器
var compiler = webpack(webpackConfig);

// webpack-dev-server中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

app.use(devMiddleware);

// 路由
app.get('/review/*', function(req, res, next) {
    var pathname = req.originalUrl.split('/');
    var view = pathname[pathname.length - 1];
    /=|\?/.test(view) ? view = view.split('?')[0] + '.html' : view = view + '.html';
    // var viewname = req.params.viewname
    //     ? req.params.viewname + '.html'
    //     : 'index.html';
    var filepath = path.join(compiler.outputPath, 'view/' + view);
    // 使用webpack提供的outputFileSystem
    compiler.outputFileSystem.readFile(filepath, function(err, result) {
        if (err) {
            // something error
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

module.exports = app.listen(8888, function(err) {
    if (err) {
        // do something
        return;
    }
    console.log('server run');
})