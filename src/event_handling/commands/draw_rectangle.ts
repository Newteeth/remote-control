import { down, left, mouse, right, up } from "@nut-tree/nut-js";

export const drawRectangle = async(args: string[]) => {


    const x: number = +args[1];
    const y: number = +args[2];

    await mouse.move(right(x));
    await mouse.move(down(y));
    await mouse.move(left(x));
    await mouse.move(up(y));
    
    return args[0];
}

