import { actor, id, name } from "./Types.js";

export class Structure {
  static create = (tuple: boolean, id: id, name: name): actor =>
    tuple ? [id, name] : { id, name };
}
