export const tunnel = 'NullTunnel';

export const environments = [
	{ browserName: 'chrome' }
];

export const maxConcurrency = 1;

// The desired AMD loader to use when running unit tests. Omit to use the default Dojo loader.
export const loaders = {
	'host-node': '@dojo/loader',
	'host-browser': 'node_modules/@dojo/loader/loader.js'
};

// Configuration options for the module loader
export const loaderOptions = {
	// Packages that should be registered with the loader in each testing environment
	packages: [
		{ name: 'app', location: '_build/app' },
		{ name: 'tests', location: '_build/tests' }
	]
};

// Non-functional test suite(s) to run in each browser
export const suites = [ 'tests/unit/all' ];

// Functional test suite(s) to run in each browser once non-functional tests are completed
export const functionalSuites = [ 'tests/functional/all' ];

// A regular expression matching URLs to files that should not be included in code coverage analysis
export const excludeInstrumentation = /(?:node_modules|bower_components|tests)[\/\\]/;
