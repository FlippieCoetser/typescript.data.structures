
import { 
  chooseRandomIconValue, 
  hasKeyValuePair 
} from "./Utils.js";

type ID = string;
type Name = string;
type Incoming = string | string[];
type Outgoing = string | string[];
type Metadata = any;
type Icon = string;


export type MinObject = {
  id: ID;
  name: Name;
  x: number;
  y: number;
};

type CoordinatePair = {
  x: number;
  y: number;
};

type UI = {
  coordinates: CoordinatePair;
  icon: Icon;
};

export type LargeObject = {
  id: ID;
  name: Name;
  incoming: Incoming;
  outgoing: Outgoing;
  metadata: Metadata;
  ui: UI;
};



export const increment_object_x_coordinate = (object: LargeObject, amount: number = 5) => {
  return {
    ...object,
    ui: {
      ...object.ui,
      coordinates: {
        x: object.ui.coordinates.x + amount,
        y: object.ui.coordinates.y,
      },
    },
  };
}

export const object = {
  small: {
    add: () => ({
      id: (Math.random() * 10).toString(),
      name: `node`,
      x: Math.random() * 10,
      y: Math.random() * 10,
      icon: chooseRandomIconValue(),
    }) as MinObject,

    findAll: (nodes: MinObject[]) => nodes,
    findById: (nodes: MinObject[], id: string) => nodes.find(node => node.id === id),
    findWhere: (nodes: MinObject[], key: string, value) => nodes.filter(node => hasKeyValuePair(node, key, value)),

    updateAll: (nodes: MinObject[]) => nodes.map(node => ({ ...node, x: node.x + 5 })),
    updateById: (nodes: MinObject[], id: string) => nodes.map(node => node.id === id ? { ...node, x: node.x + 5 } : node),
    updateWhere: (nodes: MinObject[], key, value) =>
      nodes.map(node => hasKeyValuePair(node, key, value) ? ({ ...node, x: node.x + 5 }) : node),

    deleteAll: (nodes: MinObject[]) => [],
    deleteById: (nodes: MinObject[], id: string) => nodes.filter(node => node.id !== id),
    deleteWhere: (nodes: MinObject[], key: string, value) => nodes.filter(node => !hasKeyValuePair(node, key, value)),
  },
  large: {
    add: () => ({
      id: (Math.random() * 10).toString(),
      name: `node`,
      incoming: "d5bc89b2-74ea-4d1a-a0ed-22f4de79a580",
      outgoing: "d4ae89b2-74ea-4d1a-a0ed-22f4de79a580",
      metadata: [
        {
          duration: {
            distribution: "log normal",
            parameters: [{ meanlog: 0.1640238 }, { sdlog: 0.4169375 }],
          },
        },
      ],
      ui: {
        coordinates: {
          x: Math.random() * 10,
          y: Math.random() * 10,
        },
        icon: chooseRandomIconValue(),
      },
    }) as LargeObject,

    findAll: (nodes: LargeObject[]) => nodes,
    findById: (nodes: LargeObject[], id: string) => nodes.find(node => node.id === id),
    findWhere: (nodes: LargeObject[], key: string, value) => nodes.filter(node => hasKeyValuePair(node, key, value)),

    updateAll: (nodes) => nodes.map(node => increment_object_x_coordinate(node)),
    updateById: (nodes: LargeObject[], id: string) => nodes.map(node => node.id !== id ? node : increment_object_x_coordinate(node)),
    updateWhere: (nodes: LargeObject[], key: string, value) =>
      nodes.map(node => hasKeyValuePair(node, key, value) ? increment_object_x_coordinate(node) : node),

    deleteAll: (nodes) => [],
    deleteById: (nodes: LargeObject[], id: string) => nodes.filter(node => node.id !== id),
    deleteWhere: (nodes: LargeObject[], key: string, value) => nodes.filter(node => !hasKeyValuePair(node, key, value)),
  },
};
