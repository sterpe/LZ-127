'use strict';

var _bind = Function.prototype.bind;
var edgeDefaults = require('../const/edgeDefaults');
var assign = require('object-assign');

var Edge = function Edge(src, tgt, options) {
	var config = assign({}, edgeDefaults, options);
	this.source = src;
	this.target = tgt;
	this.weight = config.weight;
};

module.exports = function () {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (_bind.apply(Edge, [null].concat(args)))();
};
var util = require('util');
util.inherits(Edge, module.exports);

