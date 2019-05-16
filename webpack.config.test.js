var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.config.base.js');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var path = require('path');

module.exports = merge(baseConfig,{
    output: {
        path:path.resolve(__dirname,'./dist'),
        filename:'js/[name].[hash].bundle.js',
        publicPath: './../'
    },
    mode: 'production',
    plugins:[
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        })
    ]
});