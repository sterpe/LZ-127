var babel = require('babel-core');

module.exports.process = function (src, path) {
	if (/\.js$/.test(path)) {
		return babel.transform(src, {
		}).code;
	}
};
