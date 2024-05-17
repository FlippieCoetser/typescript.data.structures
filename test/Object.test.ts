import { Simulator } from "../src/Simulator.js";
import { Benchmark } from "./Benchmark.js";
import { GraphNode } from "../src/GraphNode.js";
import { Detail, Type } from "../src/GraphNode.js";

describe("Given Object Data Structure is used", () => {
  let type: Type;
  beforeEach(() => {
    type = "object";
  });
  describe("and the Data Structure is small", () => {
    let detail: Detail;
    let node: GraphNode;
    let simulator: Simulator;
    beforeEach(() => {
      detail = "small";
      node = new GraphNode(type, detail);
      simulator = new Simulator();
    });
    describe("when adding 1 new nodes", () => {
      let size: number;
      beforeEach(() => {
        size = 1;
      });
      it("then the graph should contain 1 nodes taking a specific time to load into graph", () => {
        let graph = Benchmark.Performance(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
      it("then graph should contain 1 nodes using a specific amount of memory", () => {
        let graph = Benchmark.Memory(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
    });
    describe("when adding 10 new nodes", () => {
      let size: number;
      beforeEach(() => {
        size = 10;
      });
      it("then the graph should contain 10 nodes taking a specific time to load into graph", () => {
        let graph = Benchmark.Performance(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
      it("then graph should contain 10 nodes using a specific amount of memory", () => {
        let graph = Benchmark.Memory(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
    });
    describe("when adding 100 new nodes", () => {
      let size: number;
      beforeEach(() => {
        size = 100;
      });
      it("then the graph should contain 100 nodes taking a specific time to load into graph", () => {
        let graph = Benchmark.Performance(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
      it("then graph should contain 100 nodes using a specific amount of memory", () => {
        let graph = Benchmark.Memory(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
    });
    describe("when adding 1000 new nodes", () => {
      let size: number;
      beforeEach(() => {
        size = 1000;
      });
      it("then the graph should contain 1000 nodes taking a specific time to load into graph", () => {
        let graph = Benchmark.Performance(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
      it("then graph should contain 1000 nodes using a specific amount of memory", () => {
        let graph = Benchmark.Memory(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
    });
    describe("when adding 10000 new nodes", () => {
      let size: number;
      beforeEach(() => {
        size = 10000;
      });
      it("then the graph should contain 10000 nodes taking a specific time to load into graph", () => {
        let graph = Benchmark.Performance(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
      it("then graph should contain 10000 nodes using a specific amount of memory", () => {
        let graph = Benchmark.Memory(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
    });
    describe("when adding 100000 new nodes", () => {
      let size: number;
      beforeEach(() => {
        size = 100000;
      });
      it("then the graph should contain 100000 nodes taking a specific time to load into graph", () => {
        let graph = Benchmark.Performance(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
      it("then graph should contain 100000 nodes using a specific amount of memory", () => {
        let graph = Benchmark.Memory(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
    });
    describe("when adding 1000000 new nodes", () => {
      let size: number;
      beforeEach(() => {
        size = 1000000;
      });
      it("then the graph should contain 100000 nodes taking a specific time to load into graph", () => {
        let graph = Benchmark.Performance(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
      it("then graph should contain 1000000 nodes using a specific amount of memory", () => {
        let graph = Benchmark.Memory(() =>
          simulator.generateNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
    });
  });
});
