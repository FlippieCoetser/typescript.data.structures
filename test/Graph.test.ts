import { Utilities } from "utilities";

// When benchmarking, ensure you use `structuredClone` before passing in nodes
import { Benchmark } from "./Benchmark.js";

import { NodeTypes, NodeType } from "types";

import { Graph } from "graph";
describe("Given Graph imported", () => {
  it("then Graph exist", () => {
    expect(Graph).toBeDefined();
  });
});

import { Object } from "object";
describe("Given graph = new Graph(Object)", () => {
  let graph;
  beforeEach(() => {
    graph = new Graph(Object);
  });
  it("then graph exist", () => {
    expect(graph).toBeDefined();
  });
  it("then graph.node exist", () => {
    expect(graph.node).toBeDefined();
  });
  it("then graph.createNodes exist", () => {
    expect(graph.createNodes).toBeDefined();
  });
  it("then graph.node equals Object", () => {
    expect(graph.node).toBe(Object);
  });
  it("then graph.addNodes exist", () => {
    expect(graph.addNodes).toBeDefined();
  });
  it("then graph.findNodeById exist", () => {
    expect(graph.findNodeById).toBeDefined();
  });
  it("then graph.findNodesByType exist", () => {
    expect(graph.findNodesByType).toBeDefined();
  });
  it("then graph.addNodeMetadata exist", () => {
    expect(graph.addNodeMetadata).toBeDefined();
  });
  it("then graph.moveAllNodes exist", () => {
    expect(graph.moveAllNodes).toBeDefined();
  });
  it("then graph.removeNodeById exist", () => {
    expect(graph.removeNodeById).toBeDefined();
  });
  describe("when nodes = graph.createNodes(1, details)", () => {
    let nodes;
    beforeEach(() => {
      let details = {
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      };
      nodes = graph.createNodes(1, details);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 1", () => {
      expect(nodes.length).toBe(1);
    });
  });
  describe("when nodes = graph.addNode([], details)", () => {
    let nodes;
    beforeEach(() => {
      let details = {
        name: "Node1",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      };
      nodes = graph.addNode([], details);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 1", () => {
      expect(nodes.length).toBe(1);
    });
  });
  describe("when nodes = graph.addNodes(existingNodes, newNodes)", () => {
    let existingNodes;
    let newNodes;
    let nodes;
    beforeEach(() => {
      existingNodes = graph.createNodes(2, {
        name: "Node1",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      newNodes = graph.createNodes(2, {
        name: "Node2",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      nodes = graph.addNodes(existingNodes, newNodes);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 4", () => {
      expect(nodes.length).toBe(4);
    });
  });
  describe("when node = graph.findNodeById(existingNodes, id)", () => {
    let existingNodes;
    let id;
    let node;
    beforeEach(() => {
      existingNodes = graph.createNodes(2, {
        name: "Node1",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      id = existingNodes[1].id;
      node = graph.findNodeById(existingNodes, id);
    });
    it("then node exist", () => {
      expect(node).toBeDefined();
    });
    it("then node equals existingNodes[1]", () => {
      expect(node).toEqual(existingNodes[1]);
    });
  });
  describe("when nodes = graph.findNodesByType(existingNodes, type)", () => {
    let existingNodes;
    let type;
    let nodes;
    beforeEach(() => {
      existingNodes = graph.createNodes(2, {
        name: "Node1",
        type: "workflow",
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      existingNodes = graph.addNode(existingNodes, {
        name: "Node2",
        type: "decision",
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      type = "workflow";
      nodes = graph.findNodesByType(existingNodes, type);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 4", () => {
      expect(nodes.length).toBe(2);
    });
  });
  describe("when nodes = graph.addNodeMetadata(existingNodes, id, metadata)", () => {
    let existingNodes;
    let id;
    let metadata;
    let nodes;
    beforeEach(() => {
      existingNodes = graph.createNodes(2, {
        name: "Node1",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      id = existingNodes[1].id;
      metadata = {
        arrival: {
          distribution: "exponential",
          parameters: [{ rate: 1 }],
        },
      };
      nodes = graph.addNodeMetadata(existingNodes, id, metadata);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 2", () => {
      expect(nodes.length).toBe(2);
    });
    it("then nodes[1].metadata[0] equals metadata", () => {
      expect(nodes[1].metadata[0]).toEqual(metadata);
    });
  });
  describe("when nodes = graph.moveAllNodes(existingNodes, offset)", () => {
    let existingNodes;
    let offset;
    let nodes;
    beforeEach(() => {
      existingNodes = graph.createNodes(2, {
        name: "Node1",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      offset = { x: 1, y: 1 };
      nodes = graph.moveAllNodes(existingNodes, offset);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 2", () => {
      expect(nodes.length).toBe(2);
    });
    it("then nodes[1].coordinates.x equals 1", () => {
      expect(nodes[1].coordinates.x).toEqual(1);
    });
    it("then nodes[1].coordinates.y equals 1", () => {
      expect(nodes[1].coordinates.y).toEqual(1);
    });
  });
  describe("when nodes = graph.removeNodeById(existingNodes, id)", () => {
    let existingNodes;
    let id;
    let nodes;
    beforeEach(() => {
      existingNodes = graph.createNodes(2, {
        name: "Node1",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      id = existingNodes[1].id;
      nodes = graph.removeNodeById(existingNodes, id);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 1", () => {
      expect(nodes.length).toBe(1);
    });
  });
  describe("when benchmarking graph.createNodes function", () => {
    let details;
    beforeEach(() => {
      details = {
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      };
    });
    it("then create 1 node takes", () => {
      let qty = 1;
      let nodes = Benchmark.Performance(
        { structure: "Object", action: "createNodes", qty: qty },
        graph.createNodes,
        qty,
        details
      );
      expect(nodes.length).toEqual(qty);
    });
    it("then create 1 node consumes", () => {
      let qty = 1;
      let nodes = Benchmark.Memory(
        { structure: "Object", action: "createNodes", qty: qty },
        graph.createNodes,
        qty,
        details
      );
      expect(nodes.length).toEqual(qty);
    });
    it("then create 10 node takes", () => {
      let qty = 10;
      let nodes = Benchmark.Performance(
        { structure: "Object", action: "createNodes", qty: qty },
        graph.createNodes,
        qty,
        details
      );
      expect(nodes.length).toEqual(qty);
    });
    it("then create 10 node consumes", () => {
      let qty = 10;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Memory(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
    it("then create 100 node takes", () => {
      let qty = 100;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Performance(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
    it("then create 100 node consumes", () => {
      let qty = 100;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Memory(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
    it("then create 1000 node takes", () => {
      let qty = 1000;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Performance(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
    it("then create 1000 node consumes", () => {
      let qty = 1000;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Memory(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
    it("then create 10000 node takes", () => {
      let qty = 10000;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Performance(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
    it("then create 10000 node consumes", () => {
      let qty = 10000;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Memory(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
  });
  describe("when benchmarking graph.addNode function", () => {
    let details;
    beforeEach(() => {
      details = {
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      };
    });
    it("then adding 1 node to nodes takes", () => {
      let meta = { structure: "Object", action: "addNode", after: 0 };
      let results = Benchmark.Performance(meta, graph.addNode, [], details);
      expect(results.length).toEqual(1);
    });
    it("then adding 1 node to nodes consumes", () => {
      let meta = { structure: "Object", action: "addNode", after: 0 };
      let results = Benchmark.Memory(meta, graph.addNode, [], details);
      expect(results.length).toEqual(1);
    });
    it("then adding 1 node to an existing node takes", () => {
      let nodes = graph.createNodes(1, details);
      nodes = structuredClone(nodes);
      let meta = { structure: "Object", action: "addNode", after: 1 };
      let results = Benchmark.Performance(meta, graph.addNode, nodes, details);
      expect(results.length).toEqual(2);
    });
    it("then adding 1 node to an existing node consumes", () => {
      let nodes = graph.createNodes(1, details);
      nodes = structuredClone(nodes);
      let meta = { structure: "Object", action: "addNode", after: 1 };
      let results = Benchmark.Memory(meta, graph.addNode, nodes, details);
      expect(results.length).toEqual(2);
    });
  });
});

import { Tuple } from "tuple";
describe("Given graph = new Graph(Tuple)", () => {
  let graph;
  beforeEach(() => {
    graph = new Graph(Tuple);
  });
  it("then graph exist", () => {
    expect(graph).toBeDefined();
  });
  it("then graph.node exist", () => {
    expect(graph.node).toBeDefined();
  });
  it("then graph.createNodes exist", () => {
    expect(graph.createNodes).toBeDefined();
  });
  it("then graph.node equals Tuple", () => {
    expect(graph.node).toBe(Tuple);
  });
  it("then graph.addNodes exist", () => {
    expect(graph.addNodes).toBeDefined();
  });
  it("then graph.findNodeById exist", () => {
    expect(graph.findNodeById).toBeDefined();
  });
  it("then graph.findNodesByType exist", () => {
    expect(graph.findNodesByType).toBeDefined();
  });
  it("then graph.addNodeMetadata exist", () => {
    expect(graph.addNodeMetadata).toBeDefined();
  });
  it("then graph.moveAllNodes exist", () => {
    expect(graph.moveAllNodes).toBeDefined();
  });
  it("then graph.removeNodeById exist", () => {
    expect(graph.removeNodeById).toBeDefined();
  });
  describe("when nodes = graph.createNodes(1, details)", () => {
    let nodes;
    beforeEach(() => {
      let details = {
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      };
      nodes = graph.createNodes(1, details);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 1", () => {
      expect(nodes.length).toBe(1);
    });
  });
  describe("when nodes = graph.addNode([], details)", () => {
    let nodes;
    beforeEach(() => {
      let details = {
        name: "Node1",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      };
      nodes = graph.addNode([], details);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 1", () => {
      expect(nodes.length).toBe(1);
    });
  });
  describe("when nodes = graph.addNodes(existingNodes, newNodes)", () => {
    let existingNodes;
    let newNodes;
    let nodes;
    beforeEach(() => {
      existingNodes = graph.createNodes(2, {
        name: "Node1",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      newNodes = graph.createNodes(2, {
        name: "Node2",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      nodes = graph.addNodes(existingNodes, newNodes);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 4", () => {
      expect(nodes.length).toBe(4);
    });
  });
  describe("when node = graph.findNodeById(existingNodes, id)", () => {
    let existingNodes;
    let id;
    let node;
    beforeEach(() => {
      existingNodes = graph.createNodes(2, {
        name: "Node1",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      id = existingNodes[1][0];
      node = graph.findNodeById(existingNodes, id);
    });
    it("then node exist", () => {
      expect(node).toBeDefined();
    });
    it("then node equals existingNodes[1]", () => {
      expect(node).toEqual(existingNodes[1]);
    });
  });
  describe("when nodes = graph.findNodesByType(existingNodes, type)", () => {
    let existingNodes;
    let type;
    let nodes;
    beforeEach(() => {
      existingNodes = graph.createNodes(2, {
        name: "Node1",
        type: "workflow",
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      existingNodes = graph.addNode(existingNodes, {
        name: "Node2",
        type: "decision",
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      type = "workflow";
      nodes = graph.findNodesByType(existingNodes, type);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 4", () => {
      expect(nodes.length).toBe(2);
    });
  });
  describe("when nodes = graph.addNodeMetadata(existingNodes, id, metadata)", () => {
    let existingNodes;
    let id;
    let metadata;
    let nodes;
    beforeEach(() => {
      existingNodes = graph.createNodes(2, {
        name: "Node1",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      id = existingNodes[1][0];
      metadata = {
        arrival: {
          distribution: "exponential",
          parameters: [{ rate: 1 }],
        },
      };
      nodes = graph.addNodeMetadata(existingNodes, id, metadata);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 2", () => {
      expect(nodes.length).toBe(2);
    });
    it("then nodes[1][5][0] equals metadata", () => {
      expect(nodes[1][5][0]).toEqual(metadata);
    });
  });
  describe("when nodes = graph.moveAllNodes(existingNodes, offset)", () => {
    let existingNodes;
    let offset;
    let nodes;
    beforeEach(() => {
      existingNodes = graph.createNodes(2, {
        name: "Node1",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      offset = { x: 1, y: 1 };
      nodes = graph.moveAllNodes(existingNodes, offset);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 2", () => {
      expect(nodes.length).toBe(2);
    });
    it("then nodes[1][3][0] equals 1", () => {
      expect(nodes[1][3][0]).toEqual(1);
    });
    it("then nodes[1][3][1] equals 1", () => {
      expect(nodes[1][3][1]).toEqual(1);
    });
  });
  describe("when nodes = graph.removeNodeById(existingNodes, id)", () => {
    let existingNodes;
    let id;
    let nodes;
    beforeEach(() => {
      existingNodes = graph.createNodes(2, {
        name: "Node1",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      id = existingNodes[1][0];
      nodes = graph.removeNodeById(existingNodes, id);
    });
    it("then nodes exist", () => {
      expect(nodes).toBeDefined();
    });
    it("then nodes.length equals 1", () => {
      expect(nodes.length).toBe(1);
    });
  });
  describe("when benchmarking graph.createNodes function", () => {
    let details;
    beforeEach(() => {
      details = {
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      };
    });
    it("then create 1 node takes", () => {
      let qty = 1;
      let nodes = Benchmark.Performance(
        { structure: "Object", action: "createNodes", qty: qty },
        graph.createNodes,
        qty,
        details
      );
      expect(nodes.length).toEqual(qty);
    });
    it("then create 1 node consumes", () => {
      let qty = 1;
      let nodes = Benchmark.Memory(
        { structure: "Object", action: "createNodes", qty: qty },
        graph.createNodes,
        qty,
        details
      );
      expect(nodes.length).toEqual(qty);
    });
    it("then create 10 node takes", () => {
      let qty = 10;
      let nodes = Benchmark.Performance(
        { structure: "Object", action: "createNodes", qty: qty },
        graph.createNodes,
        qty,
        details
      );
      expect(nodes.length).toEqual(qty);
    });
    it("then create 10 node consumes", () => {
      let qty = 10;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Memory(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
    it("then create 100 node takes", () => {
      let qty = 100;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Performance(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
    it("then create 100 node consumes", () => {
      let qty = 100;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Memory(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
    it("then create 1000 node takes", () => {
      let qty = 1000;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Performance(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
    it("then create 1000 node consumes", () => {
      let qty = 1000;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Memory(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
    it("then create 10000 node takes", () => {
      let qty = 10000;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Performance(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
    it("then create 10000 node consumes", () => {
      let qty = 10000;
      let meta = { structure: "Object", action: "createNodes", qty: qty };
      let nodes = Benchmark.Memory(meta, graph.createNodes, qty, details);
      expect(nodes.length).toEqual(qty);
    });
  });
  describe("when benchmarking graph.addNode function", () => {
    let details;
    beforeEach(() => {
      details = {
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      };
    });
    it("then adding 1 node to nodes takes", () => {
      let meta = { structure: "Object", action: "addNode", after: 0 };
      let results = Benchmark.Performance(meta, graph.addNode, [], details);
      expect(results.length).toEqual(1);
    });
    it("then adding 1 node to nodes consumes", () => {
      let meta = { structure: "Object", action: "addNode", after: 0 };
      let results = Benchmark.Memory(meta, graph.addNode, [], details);
      expect(results.length).toEqual(1);
    });
    it("then adding 1 node to an existing node takes", () => {
      let nodes = graph.createNodes(1, details);
      nodes = structuredClone(nodes);
      let meta = { structure: "Object", action: "addNode", after: 1 };
      let results = Benchmark.Performance(meta, graph.addNode, nodes, details);
      expect(results.length).toEqual(2);
    });
    it("then adding 1 node to an existing node consumes", () => {
      let nodes = graph.createNodes(1, details);
      nodes = structuredClone(nodes);
      let meta = { structure: "Object", action: "addNode", after: 1 };
      let results = Benchmark.Memory(meta, graph.addNode, nodes, details);
      expect(results.length).toEqual(2);
    });
  });
});
