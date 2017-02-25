export * from './intern';

export const capabilities = {
	'name': 'TypeScript Boilerplate'
};

export const environments = [
	{ browserName: 'internet explorer', version: '11.0', platform: 'Windows 7' },
	{ browserName: 'MicrosoftEdge', version: 'latest', platform: 'Windows 10' },
	{ browserName: 'firefox', version: 'latest' },
	{ browserName: 'chrome', version: 'latest' },
	{ browserName: 'safari', version: 'latest' }
];

export const maxConcurrency = 2;

// Name of the tunnel class to use for WebDriver tests
export const tunnel = 'SauceLabsTunnel';
