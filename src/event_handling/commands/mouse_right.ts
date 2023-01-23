import { fnPosition } from "../position/showPosition.js";
import { mouse } from "@nut-tree/nut-js";

export const mouseRight = async (args: string[]) => {

    const pos = await fnPosition();
    pos.x = pos.x + +args[1];
    mouse.setPosition(pos);
    return args[0];
}
