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
	}
};