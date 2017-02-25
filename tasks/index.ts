import * as config from './config';

export function initConfig(grunt: IGrunt) {
	const packageJson = grunt.file.readJSON('./package.json');
	const tsconfigs = {
		src: grunt.file.readJSON('./tsconfig.json'),
		tests: grunt.file.readJSON('./tests/tsconfig.json')
	};
	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('intern');
	grunt.loadNpmTasks('webserv');

	grunt.initConfig(Object.assign({
		appDirectory: 'app',
		assetsDirectory: '<%= appDirectory %>/assets',
		dockerImageTag: 'myapp',
		packageJson,
		srcFiles: '<%= tsconfigs.src.include %>',
		targetDirectory: '_build',
		testsDirectory: 'tests',
		testFiles: '<%= tsconfigs.tests.include %>',
		tsconfigs
	}, config));

	grunt.registerTask('build-src', [ 'tslint:src', 'shell:build-src' ]);
	grunt.registerTask('build-tests', [ 'tslint:tests', 'shell:build-tests' ]);
	grunt.registerTask('build', [ 'build-src', 'build-tests' ]);
	grunt.registerTask('ci', [ 'dev', 'intern:ci' ]);
	grunt.registerTask('dev', [ 'clean:app', 'clean:tests', 'tslint:support', 'build-src', 'stylus', 'build-tests', 'copy' ]);
	grunt.registerTask('lint', [ 'tslint' ]);
	grunt.registerTask('serve', [ 'webserv' ]);
	grunt.registerTask('test', [ 'intern:browser' ]);
}
