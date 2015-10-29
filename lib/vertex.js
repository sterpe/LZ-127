const Immutable = require('immutable');
const util = require('util');

const Vertex = function (options = {}) {
	return new Immutable.Map({
		edges: new Immutable.List([])
		, instanceof: Vertex
	});
};

module.exports = (...args) => new Vertex(...args);

util.inherits(Vertex, module.exports);
