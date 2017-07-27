/*jshint node:true*/

var path = require('path');

module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		webfont: {
			// template_styl_variables: {
			// 	src: 'MaterialDesign/icons/svg/*.svg',
			// 	dest: 'template/tmp',
			// 	options: {
			// 		hashes: false,
			// 		htmlDemo: false,
			// 		types: '',
			// 		template: 'templates/template.styl'
			// 	}
			// },
			// template_html_demo: {
			// 	src: 'MaterialDesign/icons/svg/*.svg',
			// 	dest: 'demo',
			// 	options: {
			// 		hashes: false
			// 	}
			// },
			gen_fonts: {
				src: 'MaterialDesign/icons/svg/*.svg',
				dest: 'fonts',
				options: {
					hashes: false,
					types: 'eot,woff2,woff,ttf,svg',
					// engine: 'node'
				}
			},
		}
	});

	grunt.loadNpmTasks('grunt-webfont')
	grunt.registerTask('default', ['webfont']);

};