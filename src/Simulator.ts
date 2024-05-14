import { Node, Graph } from "../src/Types.js";

export class Simulator {
  private nodes: Graph = [];

  generateNodes(count: number, newNode): Node[] {
    for (let i = 0; i < count; i++) {
      let node = newNode();
      this.nodes.push(node);
    }
    return this.nodes;
  }

  findNodeById(id: string): Node | undefined {
    return this.nodes.find((node: any) => node.id === id);
  }

  // TODO: Implement all Operations
}
