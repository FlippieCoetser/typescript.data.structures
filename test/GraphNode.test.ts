import { GraphNode } from "../src/GraphNode.js";

describe("Given GraphNode is imported", () => {
  it("then GraphNode should be defined", () => {
    expect(GraphNode).toBeDefined();
  });
  describe("Given new GraphNode called node is instantiated", () => {
    let node: GraphNode;
    beforeEach(() => {
      node = new GraphNode("object");
    });
    it("then node exist", () => {
      expect(node).toBeDefined();
    });
    it("then node should contains private property type", () => {
      expect(node["type"]).toBeDefined();
    });
    it("then node should contains property type with value object", () => {
      expect(node["type"]).toEqual("object");
    });
    it("then node should contain a method called create", () => {
      expect(node.create).toBeDefined();
    });
  });
});
