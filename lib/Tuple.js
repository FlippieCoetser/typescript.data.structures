import { Utilities } from "./utilities/Utilities.js";
export class Tuple {
    static create = ({ name, type, coordinates, icon }) => [
        Utilities.uuid,
        name,
        type,
        [coordinates.x, coordinates.y],
        icon,
    ];
    static extend = (node, metadata) => {
        node[5] = metadata;
        return node;
    };
    static move = (node, coordinates) => {
        node[3] = [coordinates.x, coordinates.y];
        return node;
    };
}
