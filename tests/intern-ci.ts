export * from './intern';

export const environments = [
	{ browser: 'IE', browser_version: '11', os: 'WINDOWS' },
	{ browser: 'Firefox', version: 'latest-1..latest' },
	{ browser: 'Chrome', version: 'latest-1..latest' },
	{ browser: 'Safari', browser_version: 'latest', os: 'OS X' }
];

export const maxConcurrency = 2;

// Name of the tunnel class to use for WebDriver tests
export const tunnel = 'SauceLabsTunnel';
