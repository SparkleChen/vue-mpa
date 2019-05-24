var router = require('express').Router();
var path = require('path');
var fs = require('fs'); //文件模块

router.get('/list', function(req, res) {
    var file = path.join(__dirname, 'mock/list.json');
    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            res.send(data);
            res.end();
        }
    });
});
router.post('/filter', function(req, res) {
    var file = path.join(__dirname, 'mock/filter.json');
    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            res.send(data);
            res.end();
        }
    });
});
router.post('/chart', function(req, res) {
    var file = path.join(__dirname, 'mock/chart.json');
    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            res.send(data);
            res.end();
        }
    });
});

module.exports = router;