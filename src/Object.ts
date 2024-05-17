export type MinObject = {
  id: string;
  name: string;
  x: number;
  y: number;
};


type CoordinatePair = {
  x: number;
  y: number;
};

type UI = {
  coordinates: CoordinatePair;
  icon: string;
};

export type LargeObject = {
  id: string;
  name: string;
  incoming: string;
  outgoing: string | string[];
  metadata: any;
  ui: UI;
};

type NodeObject = MinObject | LargeObject;


export const object = {
  small: {
    add: () => ({
      id: (Math.random() * 10).toString(),
      name: `node`,
      x: Math.random() * 10,
      y: Math.random() * 10,
    }) as MinObject,

    findAll: (nodes: MinObject[]) =>
      nodes,

    findById: (nodes: MinObject[], id: string) =>
      nodes.find((node) => node.id === id),

    findWhere: (nodes: MinObject[], key: string, value) =>
      nodes.filter((node) => node[key] === value),

    updateAll: (nodes: MinObject[]) =>
      nodes.map(node => ({ ...node, x: node.x + 5 })),

    updateById: (nodes: MinObject[], id: string) =>
      nodes.map(node => (node.id === id ? { ...node, x: node.x + 5 } : node)),

    updateWhere: (nodes: MinObject[], key, value) =>
      nodes.map(node => (node[key] === value ? { ...node, x: node.x + 5 } : node)),

    deleteAll: (nodes: MinObject[]) => [],
    deleteById: (nodes: MinObject[], id: string) => nodes.filter((node) => node.id !== id),
    deleteWhere: (nodes: MinObject[], key: string, value) => nodes.filter((node) => node[key] !== value),
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
        icon: "icon",
      },
    }) as LargeObject,

    findAll: (nodes: LargeObject[]) => nodes,
    findById: (nodes: LargeObject[], id: string) => nodes.find((node) => node.id === id),
    findWhere: (nodes: LargeObject[], key: string, value) => nodes.filter((node) => node[key] === value),

    updateAll: (nodes) =>
      nodes.map(node => ({ ...node, ui: { ...node.ui, coordinates: { x: node.ui.coordinates.x + 5, y: node.ui.coordinates.y } } })),

    updateById: (nodes: LargeObject[], id: string) =>
      nodes
        .map(node => 
          node.id !== id ?
          node : 
          ({ ...node, ui: { ...node.ui, coordinates: { x: node.ui.coordinates.x + 5, y: node.ui.coordinates.y } } })),

    updateWhere: (nodes: LargeObject[], key: string, value) =>
      nodes
        .map(node => 
          node[key] !== value ? 
          node : 
          ({ ...node, ui: { ...node.ui, coordinates: { x: node.ui.coordinates.x + 5, y: node.ui.coordinates.y } } })),

    deleteAll: (nodes) => [],
    deleteById: (nodes: LargeObject[], id: string) => nodes.filter((node) => node.id !== id),
    deleteWhere: (nodes: LargeObject[], key: string, value) => nodes.filter((node) => node[key] !== value),
  },
};
