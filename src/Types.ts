export type id = string;
export type name = string;
export type x = number;
export type y = number;
export type coordinates = [x: x, y: y] | { x: x; y: y };
export type node =
  | [id, name, coordinates]
  | { id: id; name: name; coordinates: coordinates };
export type pathway = node[];
