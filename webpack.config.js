var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractCSS = new ExtractTextPlugin('/css/[name].css');

module.exports = {
    entry: {
        demo1: './js/demo1',
        demo2: './js/demo2'
    },
    output: {
        path: path.join(__dirname, '/'),
        filename: '/build/[name].js',
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        grogress: true
    },
    module: {
		loaders: [
			{ test: /\.scss$/, loader: extractCSS.extract(['css','sass']) },
        ]
    },
    plugins: [
        extractCSS
    ],
    resolve: {
		// require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.css', '.scss'], 
	},
}