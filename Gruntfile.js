const path = require('path')

module.exports = grunt => {
	'use strict'

	require('load-grunt-tasks')(grunt)

	grunt.initConfig({
		webfont: {
			// gen_fonts: {
			// 	src: 'node_modules/@mdi/svg/svg/*.svg',
			// 	dest: 'fonts',
			// 	options: {
			// 		hashes: false,
			// 		htmlDemo: true,
			// 		engine: 'node'
			// 	}
			// },
			template_styl_variables: {
				src: 'node_modules/@mdi/svg/svg/*.svg',
				dest: 'mdi-stylus/icons',
				options: {
					font: 'variables',
					hashes: false,
					htmlDemo: false,
					types: '',
					template: 'templates/template.styl'
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-webfont')
	grunt.registerTask('default', ['webfont'])

}