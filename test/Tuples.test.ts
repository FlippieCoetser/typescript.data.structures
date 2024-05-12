import { node } from "../src/Types.js";

let measure = {
  performance: (fun, args) => {
    let start = performance.now();
    let output = fun(args);
    let end = performance.now();
    setSpecProperty("performance", {
      time: end - start,
    });
    return output;
  },
  memory: (fun, args) => {
    let start = (performance as any).memory.usedJSHeapSize;
    let output = fun(args);
    let end = (performance as any).memory.usedJSHeapSize;
    setSpecProperty("memory", {
      size: end - start,
    });
    return output;
  },
};

let createNodes = (qty) => {
  let nodes: node[] = [];
  for (let i = 0; i < qty; i++) {
    nodes.push({ id: `id${i}`, name: `name${i}`, x: i, y: i });
  }
  return nodes;
};

describe("Given Tuples are used", () => {
  describe("when creating 1000 new nodes", () => {
    it("then nodes should contain 1000 nodes taking a specific time", () => {
      let nodes = measure.performance(createNodes, 1000);
      expect(nodes.length).toEqual(1000);
    });
    it("then nodes should contain 1000 nodes using a specific size", () => {
      let nodes = measure.memory(createNodes, 1000);
      expect(nodes.length).toEqual(1000);
    });
  });
});
