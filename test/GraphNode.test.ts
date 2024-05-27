import { GraphNode, Detail, Type } from "../src/GraphNode.js";
import { Simulator } from "../src/Simulator.js";

// import { nodes } from "../data/Nodes.js";

import { pick_random_node } from "./Test.Utils.js";

/**
 * All tests covering the usage on any operation method will have 1000 nodes populated in the graph / nodes array.
 * 
 */


describe("Given GraphNode is imported", () => {
    let node_amount: number;
    beforeAll(() => {
        node_amount = 1000;
    });

    it("then GraphNode should be defined", () => {
        expect(GraphNode).toBeDefined();
    });
    describe("Given the new GraphNode called node is instantiated", () => {
        let node: GraphNode;
        let detail: Detail;
        let type: Type;
        beforeEach(() => {
            detail = "small";
            type = "object";
            node = new GraphNode(type, detail);
        });

        it("then node exist", () => {
            expect(node).toBeDefined();
        });
        it("then node should contains private property type", () => {
            expect(node["type"]).toBeDefined();
        });
        it("then node should contains property type with value object", () => {
            expect(node["type"]).toEqual(type);
        });


        /**
         * Add Operation
         */
        it("then node should contain a method called add", () => {
            expect(node.add).toBeDefined();
        });
        describe("when node.add() is called", () => {
            let newNode;
            let type: Type;
            beforeEach(() => {
                type = "object";
                newNode = node.add();
            });
            it("then a node of type object is returned", () => {
                expect(typeof newNode).toEqual(type);
            });
            it("then the node should contain a property id", () => {
                expect(newNode?.id).toBeDefined();
            });
            it("then the node should contain a property name", () => {
                expect(newNode?.name).toBeDefined();
            });
            it("then the node should contain a property x", () => {
                expect(newNode?.x).toBeDefined();
            });
            it("then the node should contain a property y", () => {
                expect(newNode?.y).toBeDefined();
            });
            it("then the node should contain a property icon", () => {
                expect(newNode?.icon).toBeDefined();
            });
        });


        /** 
         * Find Operations
         */
        it("then node should contain a method called findAll", () => {
            expect(node.findAll).toBeDefined();
        });
        describe("when node.findAll() is called", () => {
            let simulator;
            let detail: Detail;
            let type: Type;
            let node: GraphNode;
            let found_nodes: any[];
            let nodes: any[];

            beforeEach(() => {
                simulator = new Simulator();
                detail = "small";
                type = "object";
                node = new GraphNode(type, detail);
                nodes = simulator.addNodes(node_amount, node.add);
                found_nodes = node.findAll(nodes);

            });
            it("then return an array of all the found node Objects", () => {
                expect(found_nodes).toBeDefined();
                expect(found_nodes).toEqual(nodes);
            });

            // Check if all the found nodes contain the following properties
            it("then all the nodes should contain a property id", () => {
                found_nodes.forEach((found_node) => {
                    expect(found_node?.id).toBeDefined();
                });
            });

            it("then all the nodes should contain a property name", () => {
                found_nodes.forEach((found_node) => {
                    expect(found_node?.name).toBeDefined();
                });
            });

            it("then all the nodes should contain a property x", () => {
                found_nodes.forEach((found_node) => {
                    expect(found_node?.x).toBeDefined();
                });
            });

            it("then all the nodes should contain a property y", () => {
                found_nodes.forEach((found_node) => {
                    expect(found_node?.y).toBeDefined();
                });
            });

            it("then all the nodes should contain a property icon", () => {
                found_nodes.forEach((found_node) => {
                    expect(found_node?.icon).toBeDefined();
                });
            });

        });
        it("then node should contain a method called findById", () => {
            expect(node.findById).toBeDefined();
        });
        describe("when node.findById() is called", () => {
            let simulator: Simulator;
            let detail: Detail;
            let type: Type;
            let node: GraphNode;
            let nodes: any[];
            let id: string;
            let random_node;
            let found_node: any;

            beforeEach(() => {
                simulator = new Simulator();
                detail = "small";
                type = "object";
                node = new GraphNode(type, detail);
                nodes = simulator.addNodes(node_amount, node.add);
                random_node = pick_random_node(nodes);
                id = random_node.id
                found_node = node.findById(nodes, id);
                // Start Node id
            });
            it("then return the node Object with the id", () => {
                expect(found_node).toBeDefined();
            });
            it("then the node should contain a property id", () => {
                expect(found_node?.id).toBeDefined();
            });
            it("then the node should contain a property name", () => {
                expect(found_node?.name).toBeDefined();
            });
            it("then the node should contain a property x", () => {
                expect(found_node?.x).toBeDefined();
            });
            it("then the node should contain a property y", () => {
                expect(found_node?.x).toBeDefined();
            });
            it("then the node should contain a property icon", () => {
                expect(found_node?.icon).toBeDefined();
            });
            it("then the node should contain a property id with value", () => {
                let node_to_find = nodes.find(node => node.id === id);
                expect(node_to_find?.id).toEqual(id);
            });

        });

        it("then node should contain a method called findWhere", () => {
            expect(node.findWhere).toBeDefined();
        });
        describe("when node.findWhere() is called", () => {
            let simulator: Simulator;
            let nodes: any[];
            let detail: Detail;
            let type: Type;
            let node: GraphNode;
            let found_nodes: any[];

            let key: string;
            let value: string;
            beforeEach(() => {
                simulator = new Simulator();
                detail = "small";
                type = "object";
                node = new GraphNode(type, detail);
                nodes = simulator.addNodes(node_amount, node.add);

                key = "name";
                value = "Start"; // Start Node id
                found_nodes = node.findWhere(nodes, key, value);
            });
            it("then return the array of found node objects matching the condition", () => {
                expect(found_nodes).toBeDefined();
            });

            it("then all the nodes should contain a property id", () => {
                found_nodes.forEach((found_node) => {
                    expect(found_node?.id).toBeDefined();
                });
            });

            it("then all the nodes should contain a property name", () => {
                found_nodes.forEach((found_node) => {
                    expect(found_node?.name).toBeDefined();
                });
            });

            it("then all the nodes should contain a property x", () => {
                found_nodes.forEach((found_node) => {
                    expect(found_node?.x).toBeDefined();
                });
            });

            it("then all the nodes should contain a property y", () => {
                found_nodes.forEach((found_node) => {
                    expect(found_node?.y).toBeDefined();
                });
            });

            it("then all the nodes should contain a property icon", () => {
                found_nodes.forEach((found_node) => {
                    expect(found_node?.icon).toBeDefined();
                });
            });

            it("then all the nodes should contain a property name with value Start", () => {
                found_nodes.forEach((found_node) => {
                    expect(found_node?.name).toEqual(value);
                });
            });

        });

        /** 
         * Update Operations
         */
        it("then node should contain a method called updateAll", () => {
            expect(node.updateAll).toBeDefined()
        });
        describe("when node.updateAll() is called", () => {
            let simulator: Simulator;
            let detail: Detail;
            let type: Type;
            let node: GraphNode;
            let nodes: any;
            let updated_nodes: any[];
            beforeEach(() => {
                simulator = new Simulator();
                detail = "small";
                type = "object";
                node = new GraphNode(type, detail);
                nodes = simulator.addNodes(node_amount, node.add);
                updated_nodes = node.updateAll(nodes);
            });
            it("then return an array of all the updated node Objects", () => {
                expect(updated_nodes).toBeDefined();
            });

            it("then all the nodes should contain a property id", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.id).toBeDefined();
                });
            });

            it("then all the nodes should contain a property name", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.name).toBeDefined();
                });
            });

            it("then all the nodes should contain a property x", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.x).toBeDefined();
                });
            });

            it("then all the nodes should contain a property y", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.y).toBeDefined();
                });
            });

            it("then all the nodes should contain a property icon", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.icon).toBeDefined();
                });
            });

            // Check if the x value of all the nodes has been incremented by 5
            it("then all the nodes should contain a property x with value incremented by 5", () => {
                expect(updated_nodes).toEqual(nodes.map((node) => { return { ...node, x: node.x + 5 }; }));
            });
        });
        it("then node should contain a method called updateById", () => {
            expect(node.updateById).toBeDefined()
        });
        describe("when node.updateById() is called", () => {
            let simulator: Simulator;
            let detail: Detail;
            let type: Type;
            let node: GraphNode;
            let nodes: any[];
            let updated_nodes: any[];
            let id: string;


            beforeEach(() => {
                simulator = new Simulator();
                detail = "small";
                type = "object";
                node = new GraphNode(type, detail);
                nodes = simulator.addNodes(node_amount, node.add);
                id = pick_random_node(nodes).id
                updated_nodes = node.updateById(nodes, id);

            });

            it("then return the array of updated node Objects with the id", () => {
                expect(updated_nodes).toBeDefined();
            });

            it("then the nodes should contain a property id", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.id).toBeDefined();
                });
            });

            it("then the nodes should contain a property name", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.name).toBeDefined();
                });
            });

            it("then the nodes should contain a property x", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.x).toBeDefined();
                });
            });

            it("then the nodes should contain a property y", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.y).toBeDefined();
                });
            });

            it("then the nodes should contain a property icon", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.icon).toBeDefined();
                });
            });

            // Check if the x value was incremented by 5
            it("then the nodes should contain a property x with value incremented by 5", () => {
                expect(updated_nodes).toEqual(nodes.map((node) => node.id === id ? { ...node, x: node.x + 5 } : node));
            });
        });

        it("then node should contain a method called updateWhere", () => {
            expect(node.updateWhere).toBeDefined()
        });
        describe("when node.updateWhere() is called", () => {
            let simulator: Simulator;

            let detail: Detail;
            let type: Type;
            let node: GraphNode;
            let nodes: any[]
            let updated_nodes: any[];
            let key: string;
            let value: string;

            beforeEach(() => {
                simulator = new Simulator();
                detail = "small";
                type = "object";
                node = new GraphNode(type, detail);
                nodes = simulator.addNodes(node_amount, node.add);
                updated_nodes = node.updateWhere(nodes, key, value);

                key = "name";
                value = "Start"; // Start Node id
            });
            it("then return the array of updated node objects matching the condition", () => {
                expect(updated_nodes).toBeDefined();
            });

            it("then all the nodes should contain a property id", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.id).toBeDefined();
                });
            });

            it("then all the nodes should contain a property name", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.name).toBeDefined();
                });
            });

            it("then all the nodes should contain a property x", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.x).toBeDefined();
                });
            });

            it("then all the nodes should contain a property y", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.y).toBeDefined();
                });
            });

            it("then all the nodes should contain a property icon", () => {
                updated_nodes.forEach((updated_node) => {
                    expect(updated_node.icon).toBeDefined();
                });
            });

            // Check if the x value of the nodes matching the condition has been incremented by 5
            it("then all the nodes should contain a property x with value incremented by 5", () => {
                expect(updated_nodes).toEqual(nodes.map((node) => node[key] === value ? { ...node, x: node.x + 5 } : node));
            });
        });

        /** 
         * Delete Operations
         */
        it("then node should contain a method called deleteAll", () => {
            expect(node.deleteAll).toBeDefined()
        });
        describe("when node.deleteAll() is called", () => {
            let simulator: Simulator;
            let detail: Detail;
            let type: Type;
            let node: GraphNode;
            let nodes: any[]

            let deleted_nodes: any[];

            beforeEach(() => {
                simulator = new Simulator();
                detail = "small";
                type = "object";
                node = new GraphNode(type, detail);
                nodes = simulator.addNodes(node_amount, node.add);
                deleted_nodes = node.deleteAll(nodes);
            });
            it("then return an array of all the deleted node Objects", () => {
                expect(deleted_nodes).toBeDefined();
            });

            it("then the array of deleted nodes should be empty", () => {
                expect(deleted_nodes).toEqual([]);
            });

        });

        it("then node should contain a method called deleteById", () => {
            expect(node.deleteById).toBeDefined()
        });
        describe("when node.deleteById() is called", () => {
            let simulator: Simulator;
            let detail: Detail;
            let type: Type;
            let node: GraphNode;
            let nodes: any[];

            let deleted_nodes: any[];
            let id: string;

            beforeEach(() => {
                simulator = new Simulator();
                detail = "small";
                type = "object";
                node = new GraphNode(type, detail);
                nodes = simulator.addNodes(node_amount, node.add);
                id = pick_random_node(nodes).id
                deleted_nodes = node.deleteById(nodes, id);

            });

            it("then return an array of all the deleted node Objects", () => {
                expect(deleted_nodes).toBeDefined();
            });

            it("then the array of deleted nodes should not contain the node with the id", () => {
                // Check if the deleted nodes array has a size one less than the original array
                expect(deleted_nodes.length).toEqual(nodes.length - 1);
                expect(deleted_nodes.find(node => node.id === id)).toBeUndefined();
            });

        });

        it("then node should contain a method called deleteWhere", () => {
            expect(node.deleteWhere).toBeDefined()
        });
        describe("when node.deleteWhere() is called", () => {
            let simulator: Simulator;
            let detail: Detail;
            let type: Type;
            let node: GraphNode;
            let nodes: any[]
            let deleted_nodes: any[];

            let key: string;
            let value: string;

            beforeEach(() => {
                simulator = new Simulator();
                detail = "small";
                type = "object";
                node = new GraphNode(type, detail);
                nodes = simulator.addNodes(node_amount, node.add);
                key = "name";
                value = "Start"; // Start Node id
                deleted_nodes = node.deleteWhere(nodes, key, value);
            });
            it("then return the array of deleted node objects matching the condition", () => {
                expect(deleted_nodes).toBeDefined();
            });

            it("then the array of deleted nodes should not contain the node with the name Start", () => {
                expect(deleted_nodes.find((node) => node.name === value)).toBeUndefined();
            });

        });

    });


});

