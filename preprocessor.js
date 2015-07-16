var reactTools = require('react-tools');

module.exports.process = function (src, path) {
	if (/\.js$/.test(path)) {
		return reactTools.transform(src, {
			"sourceMap": true,
			"harmony": true,
			"stripTypes": true,
			"es6module": true,
			"target": "es5"
		});
	}
};
