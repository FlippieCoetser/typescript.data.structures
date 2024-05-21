import { tuple } from "./Tuple.js";
import { object } from "./Object.js";

export type Detail = "small" | "large";
export type Type = "object" | "tuple";

/**
 * @class GraphNode
 * 
 * A class that represents a node in a graph. A node refers to a hexagon containing data about the steps on how to provide the best  * care for a patient, by focusing on the patient's needs and preferences.
 * A node can store patient info using either an object or tuple data structure.
 * 
 * This is a factory class that creates a node based on the type and detail provided.
 */
/**
 * Represents a node in a graph.
 */
export class GraphNode { 
  private type: Type;
  private detail: Detail;

  /**
   * Creates a new instance of the GraphNode class.
   * @param type - The type of data structure used by the graph.
   * @param detail - The specific detail of the data structure used by the graph.
   */
  constructor(type: Type, detail: Detail) {
    this.type = type;
    this.detail = detail;
  }

  /**
   * Inserts a new node into the graph depending on the type of data structure used by calling the add method of the respective data structure. Either an object or tuple data structure.
   */
  public add = () =>
    this.type === "object"
      ? object[this.detail].add()
      : tuple[this.detail].add();

  /**
   * Retrieves all nodes from the graph depending on the type of data structure used by calling the findAll method of the respective data structure. Either an object or tuple data structure.
   * @example `findAll(nodes)` => `nodes`
   * @param nodes - The nodes in the graph.
   * @returns Retrieves all nodes in the graph.
   */
  public findAll = (nodes) =>
    this.type === "object"
      ? object[this.detail].findAll(nodes)
      : tuple[this.detail].findAll(nodes);

  /**
   * Retrieves a node from the graph by its id depending on the type of data structure used by calling the findById method of the respective data structure. Either an object or tuple data structure.
   * @example `findById(nodes, "d5bc89b2-74ea-4d1a-a0ed-22f4de79a580")`
   * @param nodes - The nodes in the graph.
   * @param id - The id of the node to retrieve.
   * @returns Retrieves a node from the graph by its id.
   */
  public findById = (nodes, id) =>
    this.type === "object"
      ? object[this.detail].findById(nodes, id)
      : tuple[this.detail].findById(nodes, id);

  /**
   * Finds nodes in the graph based on a key-value pair. An example would be to find all nodes with a specific name. 
   * @example `findWhere(nodes, "name", "John")`
   * @param nodes - The nodes to search through.
   * @param key - The key to match against.
   * @param value - The value to match against.
   * @returns An array of nodes that match the given key-value pair.
   */
  public findWhere = (nodes, key, value) =>
    this.type === "object"
      ? object[this.detail].findWhere(nodes, key, value)
      : tuple[this.detail].findWhere(nodes, key, value);

  /**
   * Updates all nodes in the graph depending on the type of data structure used by calling the updateAll method of the respective data structure. Either an object or tuple data structure.
   * @param nodes - The nodes in the graph.
   */
  public updateAll = (nodes) =>
    this.type === "object"
      ? object[this.detail].updateAll(nodes)
      : tuple[this.detail].updateAll(nodes);

  /**
   * Updates a node in the graph by its id depending on the type of data structure used by calling the updateById method of the respective data structure. Either an object or tuple data structure.
   * @param nodes - The nodes in the graph.
   * @param id - The id of the node to update.
   */
  public updateById = (nodes, id) =>
    this.type === "object"
      ? object[this.detail].updateById(nodes, id)
      : tuple[this.detail].updateById(nodes, id);

  /**
   * Updates nodes in the graph based on a key-value pair.
   * @param nodes - The nodes to update.
   * @param key - The key to match against.
   * @param value - The value to match against.
   */
  public updateWhere = (nodes, key, value) =>
    this.type === "object"
      ? object[this.detail].updateWhere(nodes, key, value)
      : tuple[this.detail].updateWhere(nodes, key, value);

  /**
   * Deletes all nodes in the graph depending on the type of data structure used by calling the deleteAll method of the respective data structure. Either an object or tuple data structure.
   * @param nodes - The nodes in the graph.
   */
  public deleteAll = (nodes) =>
    this.type === "object"
      ? object[this.detail].deleteAll(nodes)
      : tuple[this.detail].deleteAll(nodes);

  /**
   * Deletes a node from the graph by its id depending on the type of data structure used by calling the deleteById method of the respective data structure. Either an object or tuple data structure.
   * @param nodes - The nodes in the graph.
   * @param id - The id of the node to delete.
   */
  public deleteById = (nodes, id) =>
    this.type === "object"
      ? object[this.detail].deleteById(nodes, id)
      : tuple[this.detail].deleteById(nodes, id);

  /**
   * Deletes nodes in the graph based on a key-value pair.
   * @param nodes - The nodes to delete.
   * @param key - The key to match against.
   * @param value - The value to match against.
   */
  public deleteWhere = (nodes, key, value) =>
    this.type === "object"
      ? object[this.detail].deleteWhere(nodes, key, value)
      : tuple[this.detail].deleteWhere(nodes, key, value);
}
