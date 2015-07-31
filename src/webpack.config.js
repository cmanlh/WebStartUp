'use strict';

var webpack = require('webpack'), HtmlWebpackPlugin = require('html-webpack-plugin'), path = require('path'), srcPath = path
		.join(__dirname, 'src/webapp');

module.exports = {
	target : 'web',
	entry : {
		common : [ 'react' ],
		main : [ 'alt' ]
	},
	resolve : {
		root : srcPath,
		extensions : [ '', '.js' ],
		modulesDirectories : [ 'node_modules' ]
	},
	output : {
		path : path.join(__dirname, 'WebContent/js'),
		publicPath : '',
		filename : '[name].js',
		pathInfo : true
	}
};