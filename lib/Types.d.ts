import { ObjectNode, ObjectConnection, ObjectPathway } from "./Object.types.js";
import { TupleNode, TupleConnection, TuplePathway } from "./Tuple.types.js";
export type Node = ObjectNode | TupleNode;
export type Connection = ObjectConnection | TupleConnection;
export type Graph = ObjectPathway | TuplePathway;
