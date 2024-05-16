export const tuple = {

  // Perhaps using an enum would be more appropriate here
  _keyToIndex: {
    id: 0,
    name: 1,
    incoming: 2,
    outgoing: 3,
    metadata: 4,
    ui: 5,
  },

  _small_keys: ["id", "name", "x", "y"],
  _large_keys: ["id", "name", "incoming", "outgoing", "metadata", "ui"],


  small: {
    add: () => [
      (Math.random() * 10).toString(),
      `node`,
      Math.random() * 10,
      Math.random() * 10,
    ],

    findAll: (nodes) => nodes,
    findById: (nodes, id) => nodes.find((node) => node[0] === id),
    findWhere: (nodes, key, value) => {
      const index = tuple._small_keys.indexOf(key);
      if (index === -1) return undefined;
      return nodes.find((node) => node[index] === value);
    },

    updateAll: (nodes) => 
      nodes.map((node) => {
        // As discussed, this will increment the x value by 5
        return [...node, node[2] + 5, node[3]];
      }
    ),

    updateById: (nodes, id) => 
      nodes.map((node) => {
        if (node[0] === id) {
          // As discussed, this will increment the x value by 5
          return [...node, node[2] + 5, node[3]];
        }
        return node;
      }
    ),

    updateWhere: (nodes, key, value) => {
      const index = tuple._small_keys.indexOf(key);
      if (index === -1) return nodes;

      return nodes.map((node) => {
        if (node[index] === value) {
          // As discussed, this will increment the x value by 5
          return [...node, node[2] + 5, node[3]];
        }
        return node;
      });
    },
    
    deleteAll: (nodes) => [],
    deleteById: (nodes, id) => nodes.filter((node) => node[0] !== id),
    deleteWhere: (nodes, key, value) => {
      const index = tuple._small_keys.indexOf(key);
      if (index === -1) return nodes;
      return nodes.filter((node) => node[index] !== value);
    },
    

  },
  large: {
    add: () => [
      (Math.random() * 10).toString(),
      `node`,
      "d5bc89b2-74ea-4d1a-a0ed-22f4de79a580",
      "d4ae89b2-74ea-4d1a-a0ed-22f4de79a580",
      [[[["log normal"], [0.1640238, 0.4169375]]]],
      [[Math.random() * 10, Math.random() * 10], "icon"],
    ],

    findAll: (nodes) => nodes,
    findById: (nodes, id) => nodes.find((node) => node[0] === id),
    findWhere: (nodes, key, value) => {
      const index = tuple._large_keys.indexOf(key);
      if (index === -1) return undefined;
      return nodes.find((node) => node[index] === value);
    },

    updateAll: (nodes) => 
      nodes.map((node) => {
        // As discussed, this will increment the x value by 5
        return [...node, node[2] + 5, node[3]];
      }
    ),

    updateById: (nodes, id) => 
      nodes.map((node) => {
        if (node[0] === id) {
          // As discussed, this will increment the x value by 5
          return [...node, node[2] + 5, node[3]];
        }
        return node;
      }
    ),

    updateWhere: (nodes, key, value) => {
      const index = tuple._large_keys.indexOf(key);
      if (index === -1) return nodes;

      return nodes.map((node) => {
        if (node[index] === value) {
          // As discussed, this will increment the x value by 5
          return [...node, node[2] + 5, node[3]];
        }
        return node;
      });
    },

    deleteAll: (nodes) => [],
    deleteById: (nodes, id) => nodes.filter((node) => node[0] !== id),
    deleteWhere: (nodes, key, value) => {
      const index = tuple._large_keys.indexOf(key);
      if (index === -1) return nodes;
      return nodes.filter((node) => node[index] !== value);
    },
  },
};
