import { createMiddleware as middleware } from './middleware';

export const clean = {
	app: [ '<%= targetDirectory %>/<%= appDirectory %>' ],
	tests: [ '<%= targetDirectory %>/<%= testsDirectory %>' ],
	reports: [ 'html-report', 'intern-a11y.html' ],
	tasks: [ 'tasks/*.js' ]
};

export const copy = {
	assets: {
		expand: true,
		src: '<%= assetsDirectory %>/*',
		dest: '<%= targetDirectory %>'
	},

	staticFiles: {
		expand: true,
		src: [ '<%= appDirectory %>/**/*.html' ],
		dest: '<%= targetDirectory %>'
	},

	staticTestFiles: {
		expand: true,
		src: [ '<%= testsDirectory %>/**/*.html' ],
		dest: '<%= targetDirectory %>'
	}
};

export const intern = {
	browser: {
		options: {
			runType: 'runner',
			config: '<%= targetDirectory %>/<%= testsDirectory %>/intern',
			reporters: [
				'Runner', 'LcovHtml'
			]
		}
	},

	ci: {
		options: {
			runType: 'runner',
			config: '<%= targetDirectory %>/<%= testsDirectory %>/intern-ci',
			reporters: [
				'Runner', 'LcovHtml'
			]
		}
	}
};

export const shell = {
	'build-src': {
		command: 'tsc'
	},

	'build-tests': {
		command: 'tsc',
		options: {
			execOptions: {
				cwd: 'tests'
			}
		}
	},

	'docker-build': {
		command: 'docker build -t <%= dockerImageTag %> .'
	},

	'docker-run': {
		command: 'docker run --rm -p 8888:8888 <%= dockerImageTag %>'
	}
};

export const stylus = {
	app: {
		files: {
			'<%= targetDirectory %>/<%= appDirectory %>/styles/main.css': '<%= appDirectory %>/styles/main.styl'
		}
	}
};

export const tslint = {
	options: {
		configuration: 'tslint.json'
	},
	support: {
		src: 'tasks/*.ts'
	},
	src: {
		src: '<%= tsconfigs.src.include %>'
	},
	tests: {
		src: 'tests/<%= tsconfigs.tests.include %>'
	}
};

export const watch = {
	copyStatic: {
		options: { atBegin: true },
		files: [ 'app/**/*.html', 'tests/functional/**/*.html', 'app/assets/*' ],
		tasks: [ 'copy' ]
	},

	src: {
		options: {atBegin: true},
		files: '<%= srcFiles =>',
		tasks: [ 'build-src' ]
	},

	styles: {
		options: { atBegin: true },
		files: [ 'app/styles/**/*.styl' ],
		tasks: [ 'stylus' ]
	},

	tests: {
		options: { atBegin: true },
		files: '<%= testsDirectory %>/<%= testFiles =>',
		tasks: [ 'build-tests' ]
	}
};

export const webserv = {
	server: {
		port: 8888,
		timeout: 60000,
		middleware
	}
};
