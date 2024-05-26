import { Metadata } from "./Generic.types.js";
import { ObjectNode, ObjectCoordinates } from "./Object.types.js";
export declare class Object {
    static create: ({ name, type, coordinates, icon }: {
        name: any;
        type: any;
        coordinates: any;
        icon: any;
    }) => ObjectNode;
    static extend: (node: ObjectNode, metadata: Metadata) => ObjectNode;
    static move: (node: ObjectNode, coordinates: ObjectCoordinates) => ObjectNode;
}
