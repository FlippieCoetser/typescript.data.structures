import { Simulator } from "../src/Simulator.js";
import { Benchmark } from "./Benchmark.js";
import { GraphNode } from "../src/GraphNode.js";

describe("Given Data Structure of Object type is used", () => {
  let node: GraphNode;
  let simulator: Simulator;
  beforeEach(() => {
    node = new GraphNode("object");
    simulator = new Simulator();
  });
  describe("when adding 1000 new nodes", () => {
    it("then nodes should contain 1000 nodes taking a specific time to load into graph", () => {
      let count = 1000;
      let nodes = Benchmark.Performance(() =>
        simulator.generateNodes(count, node.create)
      );
      expect(nodes.length).toEqual(count);
    });
    it("then nodes should contain 1000 nodes using a specific amount of memory", () => {
      let nodes = Benchmark.Memory(() =>
        simulator.generateNodes(1000, node.create)
      );
      expect(nodes.length).toEqual(1000);
    });
  });
});
