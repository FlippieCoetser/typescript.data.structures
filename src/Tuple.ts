import { Utilities } from "./utilities/Utilities.js";
import { UUID, NodeType, Icon, Metadata, GraphMeta } from "./Generic.types.js";

export type TupleCoordinates = [number, number];
export type TupleNode = [
  UUID,
  string,
  NodeType,
  TupleCoordinates,
  Icon?,
  Metadata[]?
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

export class Tuple {
  public static structure = "tuple";
  public static create = ({ name, type, coordinates, icon }): TupleNode => [
    Utilities.uuid,
    name,
    type,
    [coordinates.x, coordinates.y],
    icon,
  ];

  public static extend = (node: TupleNode, metadata: Metadata): TupleNode => {
    node[5] = Array.isArray(node[5]) ? [...node[5], metadata] : [metadata];
    return node;
  };

  public static move = (node: TupleNode, coordinates): TupleNode => {
    node[3] = [coordinates.x, coordinates.y];
    return node;
  };
}
