import { Simulator } from "../src/Simulator.js";
import { Benchmark } from "./Benchmark.js";
import { Node } from "../src/Types.js";

describe("Given Data Structure of Object type is used", () => {
  describe("when adding 1000 new nodes", () => {
    let simulator: Simulator;
    let createNode: () => Node;
    beforeEach(() => {
      simulator = new Simulator();
      createNode = () => ({
        id: (Math.random() * 10).toString(),
        name: `node`,
        x: Math.random() * 10,
        y: Math.random() * 10,
      });
    });
    it("then nodes should contain 1000 nodes taking a specific time load into graph", () => {
      let count = 1000;
      let nodes = Benchmark.Performance(() =>
        simulator.generateNodes(count, createNode)
      );
      expect(nodes.length).toEqual(count);
    });
    it("then nodes should contain 1000 nodes using a specific amount of memory", () => {
      let nodes = Benchmark.Memory(() =>
        simulator.generateNodes(1000, createNode)
      );
      expect(nodes.length).toEqual(1000);
    });
  });
});
