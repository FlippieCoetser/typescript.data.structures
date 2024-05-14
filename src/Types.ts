export type id = string;
export type name = string;
export type x = number;
export type y = number;
export type Node = [id, name, x, y] | { id: id; name: name; x: x; y: y };
export type Graph = Node[];
