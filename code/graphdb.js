/*  sgraph.js JavaScript framework, version 0.0.1
 *  (c) 2011 Sean Fao <sfao@42six.com>
 *
 *  sgraph is freely distributable under the terms of the Microsoft Public
 *  License (Ms-PL). For details, please see LICENSE.TXT at the root of this
 *  project.
 *
/*--------------------------------------------------------------------------*/

var graph = new graphDb();

function graphDb() {
    this.nodes = [];
    this.edges = [];

    this.addNode = function (node) {
        this.nodes.push(node);
    };

    this.addEdge = function (edge) {
        this.edges.push(edge);
    };
}

function node(nodeId, attributes) {
    this.nodeId = nodeId;
    this.attributes = attributes;
}

function edge(parentNodeId, targetNodeId, attributes) {
    this.parentNodeId = parentNodeId;
}
