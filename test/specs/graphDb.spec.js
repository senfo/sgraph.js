EnvJasmine.load(EnvJasmine.jsDir + "/graphdb.js");

describe("addNode", function () {
    it("Adds a node to the database", function () {
        var node = new node(1, null);

        graphDb.initialize();
        graphDb.addNode(node);

        expect(graphDb.nodes[0].nodeId).toEqual(1);
    });
});
