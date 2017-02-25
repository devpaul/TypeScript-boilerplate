// use ts-node to automatically load and transpile TypeScript using node's require
require('ts-node').register({
	'compilerOptions': {
		module: 'commonjs',
		target: 'es6'
	}
});

module.exports = function (grunt) {
	// hand off initialization
	require('./tasks').initConfig(grunt);
};
