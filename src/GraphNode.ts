export class GraphNode {
  private type: string;
  constructor(type: string) {
    this.type = type;
  }
  public create = () =>
    this.type === "object"
      ? {
          id: (Math.random() * 10).toString(),
          name: `node`,
          x: Math.random() * 10,
          y: Math.random() * 10,
        }
      : null;
}
