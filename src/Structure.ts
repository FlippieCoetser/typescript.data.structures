import { Node, id, name, x, y, icon } from "./Types.js";

export class Structure {
  static create = (tuple: boolean, id: id, name: name, x: x, y: y, icon: icon): Node =>
    tuple ? [id, name, x, y, icon] : { id, name, x, y, icon};
}
