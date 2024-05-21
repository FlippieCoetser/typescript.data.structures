export type id = string;
export type name = string;
export type x = number;
export type y = number;
export type icon = string;

export type TupleNode = [id, name, x, y, icon];
export type ObjectNode = { id: id; name: name; x: x; y: y; icon: icon;};
export type Node = TupleNode | ObjectNode | null;
export type Graph = Node[];
