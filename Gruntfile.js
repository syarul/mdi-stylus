var path = require('path');

module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		webfont: {
			template_styl_variables: {
				src: 'MaterialDesign/icons/svg/*.svg',
				dest: 'mdi-stylus/icons',
				options: {
					font: 'variables',
					hashes: false,
					htmlDemo: false,
					types: '',
					template: 'templates/template.styl'
				}
			},
			gen_fonts: {
				src: 'MaterialDesign/icons/svg/*.svg',
				// src: 'new_svg/*.svg',
				dest: 'fonts',
				options: {
					hashes: false,
					htmlDemo: true,
					// types: 'eot,woff2,woff,ttf,svg',
					types: ['woff2','woff']
					// engine: 'node'
				}
			},
		}
	});

	grunt.loadNpmTasks('grunt-webfont')
	grunt.registerTask('default', ['webfont']);

};