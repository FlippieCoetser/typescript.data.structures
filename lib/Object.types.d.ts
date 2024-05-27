import { UUID, NodeType, Icon, Metadata, GraphMeta } from "./Generic.types.js";
export type ObjectCoordinates = {
    x: number;
    y: number;
};
export type ObjectNode = {
    id: UUID;
    name: string;
    type: NodeType;
    coordinates: ObjectCoordinates;
    icon?: Icon;
    metadata?: Metadata[];
};
export type ConnectionCoordinates = {
    start: ObjectCoordinates;
    end: ObjectCoordinates;
};
export type ObjectConnection = {
    id: UUID;
    name: string;
    source: UUID;
    target: UUID;
    coordinates: ConnectionCoordinates;
};
export type ObjectPathway = {
    graph: GraphMeta;
    nodes: ObjectNode[];
    connections: ObjectConnection[];
};
