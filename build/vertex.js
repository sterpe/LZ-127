'use strict';

var _bind = Function.prototype.bind;
var Immutable = require('immutable');
var util = require('util');

var Vertex = function Vertex() {
	var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	return new Immutable.Map({
		edges: new Immutable.List([]),
		'instanceof': Vertex
	});
};

module.exports = function () {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (_bind.apply(Vertex, [null].concat(args)))();
};

util.inherits(Vertex, module.exports);
