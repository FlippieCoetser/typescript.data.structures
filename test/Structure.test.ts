import { Structure } from "../src/Structure.js";

describe("Given Structure imported", () => {
  it("Then Structure should exist", () => {
    expect(Structure).toBeDefined();
  });
  describe("Given Structure Exists", () => {
    it("Then Structure should have create static member", () => {
      expect(Structure.create).toBeDefined();
    });
  });
  describe("When Structure.create is called with useTuple = true", () => {
    it("Then it should return a tuple", () => {
      let tuple = true;
      expect(Structure.create(tuple, "1", "John")).toEqual(["1", "John"]);
    });
  });
  describe("When Structure.create is called with useTuple = false", () => {
    it("Then it should return an object", () => {
      let tuple = false;
      expect(Structure.create(tuple, "1", "John")).toEqual({
        id: "1",
        name: "John",
      });
    });
  });
});
