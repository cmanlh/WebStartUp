module.exports = function(grunt) {
	// 项目配置
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		clean : [ "WebContent/lib" ],
		copy : {
			main : {
				files : [ {
					expand : true,
					cwd : 'node_modules/bootstrap/dist/css/',
					src : [ 'bootstrap.min.css', 'bootstrap-theme.min.css' ],
					dest : 'WebContent/lib/bootstrap/css'
				}, {
					expand : true,
					cwd : 'node_modules/bootstrap/dist/js/',
					src : 'bootstrap.min.js',
					dest : 'WebContent/lib/bootstrap/js'
				}, {
					expand : true,
					cwd : 'node_modules/react/dist/',
					src : 'react.min.js',
					dest : 'WebContent/lib/'
				} ]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	// 默认任务
	grunt.registerTask('default', [ 'clean', 'copy' ]);
}