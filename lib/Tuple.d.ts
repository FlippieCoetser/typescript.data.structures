import { Metadata } from "./Generic.types.js";
import { TupleNode } from "./Tuple.types.js";
export declare class Tuple {
    static create: ({ name, type, coordinates, icon }: {
        name: any;
        type: any;
        coordinates: any;
        icon: any;
    }) => TupleNode;
    static extend: (node: TupleNode, metadata: Metadata) => TupleNode;
    static move: (node: TupleNode, coordinates: any) => TupleNode;
}
