'use strict';

var webpack = require('webpack'), path = require('path'), srcPath = path.join(
		__dirname, 'WebContent/js');

module.exports = {
	target : 'web',
	entry : srcPath + '/app.js',
	output : {
		path : srcPath,
		filename : 'bundle.js',
	},
	module : {
		loaders : [ {
			test : /\.js$/,
			loader : 'babel-loader'
		} ],
		postLoaders : [ {
			test : /\.js$/,
			loader : 'uglify-loader'
		} ]
	},
	resolve : {
		extensions : [ '', '.js' ]
	},
	devtool : "eval"
};