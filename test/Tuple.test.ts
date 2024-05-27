import { Utilities } from "utilities";
import { NodeTypes, NodeType, Metadata } from "types";

import { Tuple, TupleCoordinates, TupleNode } from "tuple";

describe("Given Tuple imported", () => {
  it("then Tuple is defined", () => {
    expect(Tuple).toBeDefined();
  });
  it("then Tuple.structure static property is defined", () => {
    expect(Tuple.structure).toBeDefined();
  });
  it("then Tuple.create static method is defined", () => {
    expect(Tuple.create).toBeDefined();
  });
  it("then Tuple.extend static method is defined", () => {
    expect(Tuple.extend).toBeDefined();
  });
  it("then Tuple.move static method is defined", () => {
    expect(Tuple.move).toBeDefined();
  });
});

describe("Given Tuple.structure static property exist", () => {
  it("then Tuple.structure equals tuple", () => {
    expect(Tuple.structure).toEqual("tuple");
  });
});

describe("Given Tuple.create static method exist", () => {
  describe("when node = Object.create(details)", () => {
    let details;
    let node: TupleNode;
    beforeEach(() => {
      details = {
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      };
      node = Tuple.create(details);
    });
    it("then node is exist", () => {
      expect(node).toBeDefined();
    });
    it("then node[0] exist", () => {
      expect(node[0]).toBeDefined();
    });
    it("then node[1] exist", () => {
      expect(node[1]).toBeDefined();
    });
    it("then node[2] exist", () => {
      expect(node[2]).toBeDefined();
    });
    it("then node[3] exist", () => {
      expect(node[3]).toBeDefined();
    });
    it("then node[4] exist", () => {
      expect(node[4]).toBeDefined();
    });
    it("then node[1] equals details.name", () => {
      expect(node[1]).toBe(details.name);
    });
    it("then node[2] equals details.type", () => {
      expect(node[2]).toEqual(details.type);
    });
    it("then node[3] equals details.coordinates", () => {
      let coordinates: TupleCoordinates = [
        details.coordinates.x,
        details.coordinates.y,
      ];
      expect(node[3]).toEqual(coordinates);
    });
    it("then node[4] equals details.icon", () => {
      expect(node[4]).toEqual(details.icon);
    });
  });
});

describe("Given Tuple.extend static method exist", () => {
  describe("when extendedNode = Tuple.extend(node, metadata)", () => {
    let node: TupleNode;
    let metadata: Metadata;
    let extendedNode: TupleNode;
    beforeEach(() => {
      node = Tuple.create({
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      metadata = {
        arrival: {
          distribution: "exponential",
          parameters: [{ rate: 1 }],
        },
      };
      extendedNode = Tuple.extend(node, metadata);
    });
    it("then extendedNode exist", () => {
      expect(extendedNode).toBeDefined();
    });
    it("then extendedNode[0] exist", () => {
      expect(extendedNode[0]).toBeDefined();
    });
    it("then extendedNode[1] exist", () => {
      expect(extendedNode[1]).toBeDefined();
    });
    it("then extendedNode[2] exist", () => {
      expect(extendedNode[2]).toBeDefined();
    });
    it("then extendedNode[3] exist", () => {
      expect(extendedNode[3]).toBeDefined();
    });
    it("then extendedNode[4] exist", () => {
      expect(extendedNode[4]).toBeDefined();
    });
    it("then extendedNode[5] exist", () => {
      expect(extendedNode[5]).toBeDefined();
    });
    it("then extendedNode[0] equals node.id", () => {
      expect(extendedNode[0]).toEqual(node[0]);
    });
    it("then extendedNode[1] equals node[1]", () => {
      expect(extendedNode[1]).toEqual(node[1]);
    });
    it("then extendedNode[2] equals node[2]", () => {
      expect(extendedNode[2]).toEqual(node[2]);
    });
    it("then extendedNode[3] equals node[3]", () => {
      expect(extendedNode[3]).toEqual(node[3]);
    });
    it("then extendedNode[4] equals node[4]", () => {
      expect(extendedNode[4]).toEqual(node[4]);
    });
    it("then result[5][0] equals metadata", () => {
      expect(extendedNode[5][0]).toEqual(metadata);
    });
  });
});

describe("Given Tuple.move static method exist", () => {
  describe("when updateNode = Tuple.move(node, coordinates)", () => {
    let node: TupleNode;
    let coordinates;
    let updatedNode: TupleNode;
    beforeEach(() => {
      node = Tuple.create({
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      coordinates = { x: 1, y: 1 };
      let input = structuredClone(node);
      updatedNode = Tuple.move(input, coordinates);
    });
    it("then updatedNode exist", () => {
      expect(updatedNode).toBeDefined();
    });
    it("then updatedNode[0] exist", () => {
      expect(updatedNode[0]).toBeDefined();
    });
    it("then updatedNode[1] exist", () => {
      expect(updatedNode[1]).toBeDefined();
    });
    it("then updatedNode[2] exist", () => {
      expect(updatedNode[2]).toBeDefined();
    });
    it("then updatedNode[3] exist", () => {
      expect(updatedNode[3]).toBeDefined();
    });
    it("then updatedNode[4] exist", () => {
      expect(updatedNode[4]).toBeDefined();
    });
    it("then updatedNode[0] equals node[0]", () => {
      expect(updatedNode[0]).toEqual(node[0]);
    });
    it("then updatedNode[1] equals node[1]", () => {
      expect(updatedNode[1]).toEqual(node[1]);
    });
    it("then updatedNode[2] equals node[2]", () => {
      expect(updatedNode[2]).toEqual(node[2]);
    });
    it("then updatedNode[3] equals coordinates", () => {
      let updatedCoordinates: TupleCoordinates = [coordinates.x, coordinates.y];
      expect(updatedNode[3]).toEqual(updatedCoordinates);
    });
    it("then updatedNode[3] is not equal to node[3]", () => {
      expect(updatedNode[3]).not.toEqual(node[3]);
    });
    it("then updatedNode[4] equals node[4]", () => {
      expect(updatedNode[4]).toEqual(node[4]);
    });
  });
});
