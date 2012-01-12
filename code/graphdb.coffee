class Node
  constructor: (@nodeId, @attributes)

class Edge
  constructor: (@parentNodeId, @targetNodeId, @attributes)

class GraphDb
  addNode: (node) ->
    nodes.splice(0, 0, node)
