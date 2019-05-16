var HtmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var glob = require('glob');

webpackConfig = {
    entry: {},
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        },
        extensions: ['.css', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.styl(us)$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg|svgz)$/,
                loader: 'file-loader',
                options: {
                    name: 'font/[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins:[
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    name : 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    chunks : 'initial',
                    priority: -10
                },
                commons: {
                    name: 'commons',    //提取出来的文件命名
                    chunks: 'initial',  //initial表示提取入口文件的公共部分
                    minChunks: 2,       //表示提取公共部分最少的文件数
                    minSize: 0          //表示提取公共部分最小的大小
                }
            }
        },
        runtimeChunk: {
            "name": "manifest"
        }
    }
};

var entries = getEntries('src/js/*');
// 获取指定路径下的入口文件
function getEntries(globPath) {
    var files = glob.sync(globPath),
        entries = {};
    files.forEach(function(filepath) {
        // 取倒数第二层(view下面的文件夹)做包名
        var split = filepath.split('/');
        var name = split[split.length - 1].split('.')[0];
        entries[name] = './' + filepath;
    });
    return entries;
}
Object.keys(entries).forEach(function(name) {
    // 每个页面生成一个entry，如果需要HotUpdate，在这里修改entry
    webpackConfig.entry[name] = entries[name];
    // 每个页面生成一个html
    var plugin = new HtmlWebpackPlugin({
        title: name,
        // 生成出来的html文件名
        filename:'view/' + name + '.html',
        // 每个html的模版，这里多个页面使用同一个模版
        template: './template.html',
        // 自动将引用插入html
        inject: true,
        // 每个html引用的js模块，也可以在这里加上vendor等公用模块
        chunks: ['manifest','vendors','commons',name],
        // 根据chunks属性顺序注入
        chunksSortMode: "manual"
    });
    webpackConfig.plugins.push(plugin);
});
module.exports  = webpackConfig;