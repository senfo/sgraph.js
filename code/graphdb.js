/*  sgraph.js JavaScript framework, version 0.0.1
 *  (c) 2011 Sean Fao <sfao@42six.com>
 *
 *  sgraph is freely distributable under the terms of the Microsoft Public
 *  License (Ms-PL). For details, please see LICENSE.TXT at the root of this
 *  project.
 *
/*--------------------------------------------------------------------------*/

var GraphDb = Class.create();

GraphDb.prototype = {
	initialize: function() {
		this.nodes = [];
		this.edges = [];
	},

	addNode: function(nodeId, nodeAttributes) {
		var node = {
			id: nodeId,
			attributes: nodeAttributes
		};

		this.nodes.push(node);
	},

	addEdge: function(parentNodeId, targetNodeId, attributes) {
		var edge = {
			parentNodeId: parentNodeId,
			targetNodeId: targetNodeId,
			attributes: attributes
		};

		this.edges.push(edge);
	}
};
