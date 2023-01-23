import { fnPosition } from "../position/showPosition.js";
import { down, left, mouse, right, up } from "@nut-tree/nut-js";

export const drawSquare = async (args: string[]) => {

    const px: number = +args[1];    

    await mouse.move(right(px));
    await mouse.move(down(px));
    await mouse.move(left(px));
    await mouse.move(up(px));

    return args[0];
}

