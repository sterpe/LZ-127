const edgeDefaults = require('../const/edgeDefaults');
const assign = require('object-assign');

const Edge = function (src, tgt, options) {
	const config = assign({}, edgeDefaults, options);
	this.source = src;
	this.target = tgt;
	this.weight = config.weight;
};


module.exports = (...args) => new Edge(...args);
const util = require('util');
util.inherits(Edge, module.exports);
