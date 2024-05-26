import { ObjectNode, ObjectConnection, ObjectPathway } from "./Object.js";
import { TupleNode, TupleConnection, TuplePathway } from "./Tuple.js";

export type Node = ObjectNode | TupleNode;
export type Nodes = Node[];
export type Connection = ObjectConnection | TupleConnection;
export type Connections = Connection[];
export type Graph = ObjectPathway | TuplePathway;
