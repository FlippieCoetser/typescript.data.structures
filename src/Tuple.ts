import {
  isArray
} from "./Utils.js";


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

// TODO: Come up with some random icons that can be chosen
// TODO:

const getValueByIndex = (data, index) => data[index];

// Find the indexes where the element at level zero is an array
const findIndexesOfArraysInArray = (keys) => 
  !isArray(keys) ? undefined : keys.reduce((found_indexes, k, i) => isArray(k) ? [...found_indexes, i] : found_indexes, []);


const largeTupleKeys = [
  "id",
  "name",
  "incoming",
  "outgoing",
  [
    [
      [
        [
          "meanlog",
          "sdlog"
        ]
      ]
    ]
  ],
  [
    [
      "x",
      "y"
    ],
    "icon"
  ]
];

const findNthLeveLIndex = (keys, key) => {
  // Base case: We are on the 0th level of the array. Check here first.
  const base_key_index = keys.indexOf(key);
  if (base_key_index !== -1) return base_key_index;

  // Recursive case: Check deeper levels.
  let nested_arrays_indexes = findIndexesOfArraysInArray(keys);

  for (let i = 0; i < nested_arrays_indexes.length; i++) {
      const current_array_index = nested_arrays_indexes[i];
      const current_array = keys[current_array_index];

      // Recursively check the nested array
      const result = findNthLeveLIndex(current_array, key);
      if (result !== -1) {
          return [current_array_index, ...isArray(result) ? result : [result]];
      }
  }
  // If the key is not found at any level, return -1
  return -1;
};

export const useNthLevelIndex = (data, index) => {
  // index is either a number or an array of numbers
  if (typeof index === "number") {
      return getValueByIndex(data, index);
  }
  let curr_value = getValueByIndex(data, index[0]);
  for (let i = 1; i < index.length; i++){
      curr_value = getValueByIndex(curr_value, index[i]);
  }
  return curr_value;
}

export const filterTupleByKeyValue = (tuple, keys, key, value) => useNthLevelIndex(tuple, findNthLeveLIndex(keys, key)) === value

export const filterSmallTupleByKeyValue = (tuple, key, value) => 
  filterTupleByKeyValue(tuple, ["id", "name","x", "y", "icon"], key, value)

export const filterLargeTupleByKeyValue = (tuple, key, value) =>
  filterTupleByKeyValue(tuple, largeTupleKeys, key, value)



export const increment_tuple_x_coordinate = (tuple: LargeTuple, amount: number = 5) => {
  const updatedCoordinate: CoordinatePairTuple = [tuple[5][0][0] + amount, tuple[5][0][1]];
  const updatedUITuple: UITuple = [updatedCoordinate, tuple[5][1]];
  return [...tuple.slice(0,5), updatedUITuple];
};


export const chooseRandomIconValue = () => {
  const icons = Array.from({length: 10}, (_, i) => `icon-${i}`);
  return icons[Math.floor(Math.random() * icons.length)];
}


export const tuple = {
  small: {
    add: () => [
      (Math.random() * 10).toString(),
      `node`,
      Math.random() * 10,
      Math.random() * 10,
      chooseRandomIconValue(), 
    ] as MinTuple,

    findAll: (nodes: MinTuple[]) => nodes,
    findById: (nodes: MinTuple[], id: ID) => nodes.find(node => node[0] === id),
    findWhere: (nodes: MinTuple[], key: string, value) => nodes.filter(node => filterSmallTupleByKeyValue(node, key, value)),
    
    updateAll: (nodes: MinTuple[]) => 
      nodes.map(node => [...node, node[2] + 5, node[3], node[4]]),
    updateById: (nodes: MinTuple[], id: ID) =>
      nodes.map(node => (node[0] === id ? [...node, node[2] + 5, node[3], node[4]] : node)),
    updateWhere: (nodes: MinTuple[], key: string, value) => 
      nodes.map(node => filterSmallTupleByKeyValue(node, key, value) ?  [...node, node[2] + 5, node[3], node[4]] : node),
    
    deleteAll: (nodes: MinTuple[]) => [],
    deleteById: (nodes: MinTuple[], id: ID) => nodes.filter(node => node[0] !== id),
    deleteWhere: (nodes: MinTuple[], key: string, value) => nodes.filter(node => !filterSmallTupleByKeyValue(node, key, value)),
  },
  large: {
    add: () => [
      (Math.random() * 10).toString(),
      `node`,
      "d5bc89b2-74ea-4d1a-a0ed-22f4de79a580",
      "d4ae89b2-74ea-4d1a-a0ed-22f4de79a580",
      [[[["log normal"], [0.1640238, 0.4169375]]]],
      [[Math.random() * 10, Math.random() * 10], chooseRandomIconValue()],
    ] as LargeTuple,

    findAll: (nodes: LargeTuple[]) => nodes,
    findById: (nodes: LargeTuple[], id: ID) => nodes.find(node => node[0] === id),
    findWhere: (nodes: LargeTuple[], key: string, value) => nodes.filter(node => filterLargeTupleByKeyValue(node, key, value)),

    updateAll: (nodes: LargeTuple[]) => nodes.map(node => increment_tuple_x_coordinate(node)),
    updateById: (nodes: LargeTuple[], id: ID) => nodes.map(node => node[0] === id ? increment_tuple_x_coordinate(node) : node),
    updateWhere: (nodes: LargeTuple[], key: string, value) => 
      nodes.map(node => filterLargeTupleByKeyValue(node, key, value) ?  increment_tuple_x_coordinate(node) : node),

    deleteAll: (nodes: LargeTuple[]) => [],
    deleteById: (nodes: LargeTuple[], id: ID) => nodes.filter(node => node[0] !== id),
    deleteWhere: (nodes: LargeTuple[], key: string, value) => nodes.filter(node => !filterLargeTupleByKeyValue(node, key, value)),
  },
};
