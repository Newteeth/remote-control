import { fnPosition } from "../position/showPosition.js";
import { mouse } from "@nut-tree/nut-js";

export const mouseUp = async (args: string[]) => {
    const pos = await fnPosition();
    pos.y = pos.y - +args[1];
    mouse.setPosition(pos);
    return args[0];
}
