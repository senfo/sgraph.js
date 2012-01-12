EnvJasmine.load(EnvJasmine.jsDir + "/graphdb.js");

describe("addNode", function () {
    it("Adds a node to the database", function () {
        var n = new Node(1, null);

        graph.addNode(n);

        expect(graph.nodes[0].nodeId).toEqual(n.nodeId);
    });
});
