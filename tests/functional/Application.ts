import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';

registerSuite({
	name: 'src/Application',

	loads() {
		return this.remote
			.get('http://localhost:9000/_build/app/index.html')
			.findAllByCssSelector('.myapp')
			.then(function (elements: any[]) {
				assert.lengthOf(elements, 1);
			});
	}
});
