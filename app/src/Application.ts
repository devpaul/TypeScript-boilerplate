export default class Application {
	private started = false;

	start() {
		if (this.started) {
			throw new Error('Application has already started');
		}
		this.started = true;
		console.log('Hello World!');
	}
}
