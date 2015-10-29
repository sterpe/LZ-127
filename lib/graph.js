const graphDefaults = require('../const/graphDefaults');
const Vertex = require('./vertex');
const Edge = require('./edge');
const assign = require('object-assign');
const util = require('util');

const Graph = function (options = {}) {
	const config = assign({}, graphDefaults, options);
	this.edges = [];
	this.vertices = [];
};

module.exports = (...args) => new Graph(...args);

util.inherits(Graph, module.exports);

Graph.prototype.addVertex = function (options) {
	var vertex = new Vertex(options);
	this.vertices.push(vertex);
	return vertex;
};

Graph.prototype.removeVertex = function (options) {
};
