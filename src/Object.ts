import { Utilities } from "./utilities/Utilities.js";

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

export type ObjectConnectionCoordinates = {
  start: ObjectCoordinates;
  end: ObjectCoordinates;
};

export type ObjectConnection = {
  id: UUID;
  name: string;
  source: UUID;
  target: UUID;
  coordinates: ObjectConnectionCoordinates;
};

export type ObjectPathway = {
  graph: GraphMeta;
  nodes: ObjectNode[];
  connections: ObjectConnection[];
};

export class Object {
  public static structure = "object";
  public static create = ({ name, type, coordinates, icon }): ObjectNode => ({
    id: Utilities.uuid,
    name,
    type,
    coordinates,
    icon,
  });

  public static extend = (
    node: ObjectNode,
    metadata: Metadata
  ): ObjectNode => ({
    ...node,
    metadata: node.metadata ? [...node.metadata, metadata] : [metadata],
  });

  public static move = (
    node: ObjectNode,
    coordinates: ObjectCoordinates
  ): ObjectNode => ({
    ...node,
    coordinates,
  });
}
