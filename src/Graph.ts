import { Node, Nodes } from "./Types.js";
import { Object, ObjectNode } from "object";
import { Tuple, TupleNode } from "tuple";
import { Metadata } from "types";

type NodeFactory = typeof Object | typeof Tuple;

// Operations on Graph takes nodes as first argument to enable performance testing
// Once performance testing is done, we can refactor to use a class instance
// Also operations can return this to enable fluent interface
export class Graph {
  public node: NodeFactory;
  constructor(nodeFactory: NodeFactory) {
    this.node = nodeFactory;
  }

  createNodes = (qty: number, details): Nodes =>
    Array.from({ length: qty }, () => this.node.create(details));

  addNode = (nodes: Nodes, details): Nodes => [
    ...nodes,
    this.node.create(details),
  ];

  addNodes = (nodes: Nodes, newNodes: Nodes): Nodes => [...nodes, ...newNodes];

  findNodeById = (nodes: Nodes, id: string): Node =>
    this.node.structure === "object"
      ? nodes.find((node: ObjectNode) => node.id === id)
      : nodes.find((node: TupleNode) => node[0] === id);

  findNodesByType = (nodes: Nodes, type: string): Nodes =>
    this.node.structure === "object"
      ? nodes.filter((node: ObjectNode) => node.type === type)
      : nodes.filter((node: TupleNode) => node[2] === type);

  addNodeMetadata = (nodes: Nodes, id: string, metadata: Metadata): Nodes => {
    let addMetadata = (node, metadata) => this.node.extend(node, metadata);
    return this.node.structure === "object"
      ? nodes.map((node: ObjectNode) =>
          node.id === id ? addMetadata(node, metadata) : node
        )
      : nodes.map((node: TupleNode) =>
          node[0] === id ? addMetadata(node, metadata) : node
        );
  };

  moveAllNodes = (nodes: Nodes, offset): Nodes => {
    let moveNode = (node, coordinates) => this.node.move(node, coordinates);
    return this.node.structure === "object"
      ? nodes.map((node: ObjectNode) =>
          moveNode(node, {
            x: node.coordinates.x + offset.x,
            y: node.coordinates.y + offset.y,
          })
        )
      : nodes.map((node: TupleNode) =>
          moveNode(node, {
            x: node[3][0] + offset.x,
            y: node[3][1] + offset.y,
          })
        );
  };

  removeNodeById = (nodes: Nodes, id: string): Nodes =>
    this.node.structure === "object"
      ? nodes.filter((node: ObjectNode) => node.id !== id)
      : nodes.filter((node: TupleNode) => node[0] !== id);
}
