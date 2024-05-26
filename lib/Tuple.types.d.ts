import { UUID, NodeType, Icon, Metadata, GraphMeta } from "./Generic.types.js";
export type TupleCoordinates = [number, number];
export type TupleNode = [
    UUID,
    string,
    NodeType,
    TupleCoordinates,
    Icon?,
    Metadata?
];
export type TupleConnectionCoordinates = [TupleCoordinates, TupleCoordinates];
export type TupleConnection = [
    UUID,
    string,
    UUID,
    UUID,
    TupleConnectionCoordinates
];
export type TuplePathway = [GraphMeta, TupleNode[], TupleConnection[]];
