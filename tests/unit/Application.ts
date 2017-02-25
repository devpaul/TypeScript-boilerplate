import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import Application from 'app/src/Application';

registerSuite({
	name: 'src/Application',

	start: {
		'called once'() {
			const app = new Application();
			assert.isFalse(app['started']);
			app.start();
			assert.isTrue(app['started']);
		},

		'called twice'() {
			const app = new Application();
			assert.throws(function () {
				app.start();
				app.start();
			});
		}
	}
});
