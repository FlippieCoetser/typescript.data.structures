import { Simulator } from "../src/Simulator.js";
import { Benchmark } from "./Benchmark.js";
import { GraphNode } from "../src/GraphNode.js";
import { Detail, Type } from "../src/GraphNode.js";


import {
  filterSmallTupleByKeyValue,
  filterLargeTupleByKeyValue,
  increment_tuple_x_coordinate

} from "../src/Tuple.js";

import {
  pick_random_node,
  pick_random_key_value_tuple_small,
  pick_random_key_value_tuple_large,
  executeTestSuite,
} from "./Test.Utils.js";


describe("Given Tuple is used as a data structure", () => {
  let type: Type;

  beforeEach(() => {
    type = "tuple";
  });

  /**
   * Small Tuple - Add
   */
  describe('and the data structure is small', () => {
    let detail: Detail;
    beforeEach(() => {
      detail = "small";
    });
    describe("when adding 1 new node", () => {
      let size: number;
      let node: GraphNode;
      let simulator: Simulator;
      beforeEach(() => {
        size = 1;
        node = new GraphNode(type, detail);
        simulator = new Simulator();
      });
      it(`then the graph should contain 1 nodes, taking a specific time to load into graph`, () => {
        let graph = Benchmark.Performance(() =>
          simulator.addNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
      it(`then graph should contain 1 nodes, using a specific amount of memory`, () => {
        let graph = Benchmark.Memory(() =>
          simulator.addNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
    });
  });

  describe('and the data structure is large', () => {
    let detail: Detail;
    beforeEach(() => {
      detail = "large";
    });
    describe("when adding 1 new node", () => {
      let size: number;
      let node: GraphNode;
      let simulator: Simulator;
      beforeEach(() => {
        size = 1;
        node = new GraphNode(type, detail);
        simulator = new Simulator();
      });
      it(`then the graph should contain 1 nodes, taking a specific time to load into graph`, () => {
        let graph = Benchmark.Performance(() =>
          simulator.addNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
      it(`then graph should contain 1 nodes, using a specific amount of memory`, () => {
        let graph = Benchmark.Memory(() =>
          simulator.addNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
    });

    /** Do this for 10 to 10**6 */

    describe("when adding 10 new nodes", () => {
      let size: number;
      let node: GraphNode;
      let simulator: Simulator;
      beforeEach(() => {
        size = 10;
        node = new GraphNode(type, detail);
        simulator = new Simulator();
      });
      it(`then the graph should contain 10 nodes, taking a specific time to load into graph`, () => {
        let graph = Benchmark.Performance(() =>
          simulator.addNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
      it(`then graph should contain 10 nodes, using a specific amount of memory`, () => {
        let graph = Benchmark.Memory(() =>
          simulator.addNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
    });

    describe("when adding 100 new nodes", () => {
      let size: number;
      let node: GraphNode;
      let simulator: Simulator;
      beforeEach(() => {
        size = 100;
        node = new GraphNode(type, detail);
        simulator = new Simulator();
      });
      it(`then the graph should contain 100 nodes, taking a specific time to load into graph`, () => {
        let graph = Benchmark.Performance(() =>
          simulator.addNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
      it(`then graph should contain 100 nodes, using a specific amount of memory`, () => {
        let graph = Benchmark.Memory(() =>
          simulator.addNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
    });

    describe("when adding 1000 new nodes", () => {
      let size: number;
      let node: GraphNode;
      let simulator: Simulator;
      beforeEach(() => {
        size = 1000;
        node = new GraphNode(type, detail);
        simulator = new Simulator();
      });
      it(`then the graph should contain 1000 nodes, taking a specific time to load into graph`, () => {
        let graph = Benchmark.Performance(() =>
          simulator.addNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
      it(`then graph should contain 1000 nodes, using a specific amount of memory`, () => {
        let graph = Benchmark.Memory(() =>
          simulator.addNodes(size, node.add)
        );
        expect(graph.length).toEqual(size);
      });
    });

    


  });
});

