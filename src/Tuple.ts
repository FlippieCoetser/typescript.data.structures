type ID = string;
type Name = string;
type Incoming = string | string[];
type Outgoing = string | string[];
type Metadata = any;
type Icon = string;

type x = number;
type y = number;

export type MinTuple = [ID, Name, x, y, Icon];

export type CoordinatePairTuple = [x, y];

export type UITuple = [CoordinatePairTuple, Icon];

export type LargeTuple = [ID, Name, Incoming, Outgoing, Metadata, UITuple];


/**
 * 
 * @param tuple A node in a graph
 * @param index The position of the key in the tuple
 * @param value The value to filter by when matching the key in a condition
 * @returns 
 */

const _filterTuplesByIndexValue = (tuple, index: number, value) => {
  if (tuple[index] === value) {
    return true;
  }
  
  // Check if the tuple has nested tuples, if so walk down the path of the nested tuples to find the value
  for (let i in tuple) {
    if (Array.isArray(tuple[i])) {
      if (_filterTuplesByIndexValue(tuple[i], index, value)) {
        return true;
      }
    }
  }
  return false;
}


/**
 * This function filters a graph of nodes by a key-value pair. It should be passed as a callback to the Array.prototype.filter method.
 * The function will return true if the key-value pair exists in the graph. The tuple can be small (flat to 1D) or large (nested af)
 * 
 * @param tuple A node in a graph
 * @param key The key to filter by
 * @param value The value to filter by when matching the key in a condition
 * @returns 
 */

export const filterTuplesByKeyValue = (tuple: MinTuple | LargeTuple, key: string, value) => {


  if (tuple.length === 5) {
    const index = ["id", "name", "x", "y", "icon"].indexOf(key);
    return _filterTuplesByIndexValue(tuple, index, value);
  }

  // Check if the key entered by the user is a sub-key (e.g `x`) instead of ui.coordinates.x
  const base_index = ["id", "name", "incoming", "outgoing", "metadata", "ui"].indexOf(key);
  if (base_index === -1) {
    console.log(`Base index=${base_index} | key=${key} | val=${value} | tuple=${tuple[5]}`)

    const ui_tuple = tuple[5];
    const [coordinate_pair, icon] = ui_tuple;
    // Assume we are delving in the UI tuple
    switch (key) {
      case "x":
        return coordinate_pair[0] === value;
      case "y":
        return coordinate_pair[1] === value;
      case "icon":
        return icon === value;
      // default:
      //   return false;
    }
  }

  return _filterTuplesByIndexValue(tuple, base_index, value);
  
};


export const increment_tuple_x_coordinate = (tuple: LargeTuple, amount: number = 5) => {
  const updatedCoordinate: CoordinatePairTuple = [tuple[5][0][0] + amount, tuple[5][0][1]];
  const updatedUITuple: UITuple = [updatedCoordinate, tuple[5][1]];
  return [...tuple.slice(0,5), updatedUITuple];
};


export const tuple = {
  small: {
    add: () => [
      (Math.random() * 10).toString(),
      `node`,
      Math.random() * 10,
      Math.random() * 10,
      "icon",
    ] as MinTuple,

    findAll: (nodes: MinTuple[]) => nodes,
    findById: (nodes: MinTuple[], id: ID) => nodes.find(node => node[0] === id),
    findWhere: (nodes: MinTuple[], key: string, value) => nodes.filter(node => filterTuplesByKeyValue(node, key, value)),
    
    updateAll: (nodes: MinTuple[]) => 
      nodes.map(node => [...node, node[2] + 5, node[3], node[4]]),
    updateById: (nodes: MinTuple[], id: ID) =>
      nodes.map(node => (node[0] === id ? [...node, node[2] + 5, node[3], node[4]] : node)),
    updateWhere: (nodes: MinTuple[], key: string, value) => 
      nodes.map(node => filterTuplesByKeyValue(node, key, value) ?  [...node, node[2] + 5, node[3], node[4]] : node),
    
    deleteAll: (nodes: MinTuple[]) => [],
    deleteById: (nodes: MinTuple[], id: ID) => nodes.filter(node => node[0] !== id),
    deleteWhere: (nodes: MinTuple[], key: string, value) => nodes.filter(node => !filterTuplesByKeyValue(node, key, value)),
  },
  large: {
    add: () => [
      (Math.random() * 10).toString(),
      `node`,
      "d5bc89b2-74ea-4d1a-a0ed-22f4de79a580",
      "d4ae89b2-74ea-4d1a-a0ed-22f4de79a580",
      [[[["log normal"], [0.1640238, 0.4169375]]]],
      [[Math.random() * 10, Math.random() * 10], "icon"],
    ] as LargeTuple,

    findAll: (nodes: LargeTuple[]) => nodes,
    findById: (nodes: LargeTuple[], id: ID) => nodes.find(node => node[0] === id),
    findWhere: (nodes: LargeTuple[], key: string, value) => nodes.filter(node => filterTuplesByKeyValue(node, key, value)),

    updateAll: (nodes: LargeTuple[]) => nodes.map(node => increment_tuple_x_coordinate(node)),
    updateById: (nodes: LargeTuple[], id: ID) => nodes.map(node => node[0] === id ? increment_tuple_x_coordinate(node) : node),
    updateWhere: (nodes: LargeTuple[], key: string, value) => {
      const nodesToUpdate = nodes.filter(node => filterTuplesByKeyValue(node, key, value));
      const updatedNodes = nodesToUpdate.map(node => increment_tuple_x_coordinate(node));
      return nodes.map(node => filterTuplesByKeyValue(node, key, value) ? updatedNodes.shift() : node); 
    },

    deleteAll: (nodes: LargeTuple[]) => [],
    deleteById: (nodes: LargeTuple[], id: ID) => nodes.filter(node => node[0] !== id),
    deleteWhere: (nodes: LargeTuple[], key: string, value) => nodes.filter(node => !filterTuplesByKeyValue(node, key, value)),
  },
};
