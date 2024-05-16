export const object = {
  small: {
    add: () => ({
      id: (Math.random() * 10).toString(),
      name: `node`,
      x: Math.random() * 10,
      y: Math.random() * 10,
    }),

    findAll: (nodes) => nodes,
    findById: (nodes, id) => nodes.find((node) => node.id === id),
    findWhere: (nodes, key, value) => nodes.find((node) => node[key] === value),

    updateAll: (nodes) => 
      nodes.map((node) => {
        // As discussed, this will increment the x value by 5
        return { ...node, x: node.x + 5 };
      }
    ),

    updateById: (nodes, id) => 
      nodes.map((node) => {
        if (node.id === id) {
          // As discussed, this will increment the x value by 5
          return { ...node, x: node.x + 5 };
        }
        return node;
      }
    ),

    updateWhere: (nodes, key, value) => 
      nodes.map((node) => {
        if (node[key] === value) {
          // As discussed, this will increment the x value by 5
          return { ...node, x: node.x + 5 };
        }
        return node;
      }
    ),

    deleteAll: (nodes) => [],
    deleteById: (nodes, id) => nodes.filter((node) => node.id !== id),
    deleteWhere: (nodes, key, value) => nodes.filter((node) => node[key] !== value),
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
    }),

    findAll: (nodes) => nodes,
    findById: (nodes, id) => nodes.find((node) => node.id === id),
    findWhere: (nodes, key, value) => nodes.find((node) => node[key] === value),

    updateAll: (nodes) => 
      nodes.map((node) => {
        // As discussed, this will increment the x value by 5
        return { ...node, ui: { ...node.ui, coordinates: { x: node.ui.coordinates.x + 5, y: node.ui.coordinates.y } } };
      }
    ),

    updateById: (nodes, id) => 
      nodes.map((node) => {
        if (node.id === id) {
          // As discussed, this will increment the x value by 5
          return { ...node, ui: { ...node.ui, coordinates: { x: node.ui.coordinates.x + 5, y: node.ui.coordinates.y } } };
        }
        return node;
      }
    ),

    updateWhere: (nodes, key, value) => 
      nodes.map((node) => {
        if (node[key] === value) {
          // As discussed, this will increment the x value by 5
          return { ...node, ui: { ...node.ui, coordinates: { x: node.ui.coordinates.x + 5, y: node.ui.coordinates.y } } };
        }
        return node;
      }
    ),

    deleteAll: (nodes) => [],
    deleteById: (nodes, id) => nodes.filter((node) => node.id !== id),
    deleteWhere: (nodes, key, value) => nodes.filter((node) => node[key] !== value),


  },
};
