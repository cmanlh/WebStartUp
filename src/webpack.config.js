'use strict';

var webpack = require('webpack'), path = require('path'), srcPath = path.join(
		__dirname, 'WebContent/js'), ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	target : 'web',
	entry : {
		main : srcPath + '/app.js',
		common : [ 'bootstrap' ]
	},
	output : {
		path : srcPath,
		filename : 'bundle.js',
	},
	module : {
		loaders : [ {
			test : /\.css$/,
			loader : ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test : /\.js$/,
			exclude : /node_modules/,
			loader : 'babel-loader'
		} ],
		postLoaders : [ {
			test : /\.js$/,
			loader : 'uglify-loader',
			minimize : true
		} ]
	},
	resolve : {
		extensions : [ '', '.js' ]
	},
	devtool : "eval",
	'uglify-loader' : {
		mangle : true
	},
	plugins : [ new ExtractTextPlugin("[name].css") ]
};