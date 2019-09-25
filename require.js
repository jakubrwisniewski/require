(function() {
	const def = {};
	const cached = {};

	function require(name) {
		if(!def[name]) {
			throw new Error(`Module ${name} is not implemented`);
		}

		if(!cached[name]) {
			cached[name] = def[name]();
		}

		return cached[name];
	}

	function define(name, value) {
		def[name] = value;
	}

	window.require = require;
	window.define = define;
})();
