// dev-server.js
var express = require('express');
var webpack = require('webpack');
var bodyParser = require('body-parser');
var webpackConfig = require('./webpack.config.dev.js');
var path = require('path');
var app = express();
var api = require('./api');
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(devMiddleware);
app.use('/api',api);
//设置允许跨域请求
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});


// 路由
app.get('/review/*', function(req, res, next) {
    var pathname = req.originalUrl.split('/');
    var view = pathname[pathname.length - 1];
    /=|\?/.test(view) ? view = view.split('?')[0] + '.html' : view = view + '.html';
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