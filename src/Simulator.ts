import { Node, Graph } from "../src/Types.js";

export class Simulator {
  private nodes: Graph = [];

  generateNodes(count: number): Node[] {
    for (let i = 0; i < count; i++) {
      this.nodes.push({ id: `node${i}`, name: `Node ${i}`, x: i, y: i });
    }
    return this.nodes;
  }

  findNodeById(id: string): Node | undefined {
    return this.nodes.find((node: any) => node.id === id);
  }

  // TODO: Implement all Operations
}
