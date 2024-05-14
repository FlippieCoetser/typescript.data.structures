export class Simulator {
    constructor() {
        this.nodes = [];
        // TODO: Implement all Operations
    }
    generateNodes(count) {
        let nodes = [];
        for (let i = 0; i < count; i++) {
            this.nodes.push({ id: `node${i}`, name: `Node ${i}`, x: i, y: i });
        }
        return this.nodes;
    }
    findNodeById(id) {
        return this.nodes.find((node) => node.id === id);
    }
}
//# sourceMappingURL=Simulator.js.map