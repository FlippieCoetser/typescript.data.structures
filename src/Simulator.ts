import { Node } from "../src/Types.js";

export class Simulator {
  addNodes = (count: number, newNode: Function): Node[] => Array.from({ length: count }, () => newNode());

  findAllNodes = (nodes, findAllNodesMethod: Function): Node[] => findAllNodesMethod(nodes);
  findNodeById = (nodes, id: string, findNodeByIDMethod: Function): Node | undefined => findNodeByIDMethod(nodes, id);
  findNodesWhere = (nodes, key: string, value, findNodesWhereMethod: Function): Node[] =>
    findNodesWhereMethod(nodes, key, value);

  updateAllNodes = (nodes, updateAllNodesMethod: Function): Node[] => updateAllNodesMethod(nodes);
  updateNodeById = (nodes, id: string, updateNodeByIDMethod: Function): Node[] => updateNodeByIDMethod(nodes, id);
  updateNodesWhere = (nodes, key: string, value, updateNodesWhereMethod: Function): Node[] => 
    updateNodesWhereMethod(nodes, key, value);
  
  deleteAllNodes = (nodes, deleteAllNodesMethod?): Node[] => deleteAllNodesMethod(nodes);
  deleteNodeById = (nodes, id: string, deleteNodeByIDMethod: Function): Node[] => deleteNodeByIDMethod(nodes, id);
  deleteNodesWhere = (nodes, key: string, value, deleteNodesWhereMethod: Function): Node[] => 
    deleteNodesWhereMethod(nodes, key, value);
}
