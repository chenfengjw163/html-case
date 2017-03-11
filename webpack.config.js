var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('/css/[name].css');

module.exports = {
    entry: {
        demo1: './js/home',
        demo2: './js/demo2'
    },
    output: {
        path: path.join(__dirname, '/'),
        filename: '/build/[name].js',
    },
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: extractCSS.extract([ 'css-loader', 'sass-loader', 'autoprefixer-loader?{browsers:["last 2 version", "> 1%"]}' ])
            },
            { 
                test: /\.(png|jpg|gif)$/, 
                loader: 'url-loader?limit=1024,name=/img/[name].[ext]' 
            }, 
        ]
    },
    plugins: [
        extractCSS
    ],
    resolve: {
		// require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js', '.css', '.scss'], 
	},
}