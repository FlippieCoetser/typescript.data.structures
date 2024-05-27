import { Utilities } from "./utilities/Utilities.js";
export class Object {
    static create = ({ name, type, coordinates, icon }) => ({
        id: Utilities.uuid,
        name,
        type,
        coordinates,
        icon,
    });
    static extend = (node, metadata) => ({
        ...node,
        metadata,
    });
    static move = (node, coordinates) => ({
        ...node,
        coordinates,
    });
}
