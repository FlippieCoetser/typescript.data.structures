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

const isObject = (data) => data && typeof data === 'object' && !Array.isArray(data);

export const hasKeyValuePair = (object, targetKey, targetValue) => {
  // Check if the current object contains the key-value pair
  if (object.hasOwnProperty(targetKey) && object[targetKey] === targetValue) {
    return true;
  }

  // Recurse through all properties of the object
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];
      
      // If the value is an object, recurse into it
      if (isObject(value)) {
        if (hasKeyValuePair(value, targetKey, targetValue)) {
          return true;
        }
      }
      
      // If the value is an array, recurse into each item
      if (Array.isArray(value)) {
        for (const item of value) {
          if (isObject(item) || Array.isArray(item)) {
            if (hasKeyValuePair(item, targetKey, targetValue)) {
              return true;
            }
          }
        }
      }
    }
  }

  // Return false if the key-value pair is not found
  return false;
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

export const chooseRandomIconValue = () => {
  const icons = Array.from({length: 10}, (_, i) => `icon-${i}`);
  return icons[Math.floor(Math.random() * icons.length)];
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
      nodes.map(node => hasKeyValuePair(node, key, value) ? { ...node, x: node.x + 5 } : node),

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
