import { mouse } from "@nut-tree/nut-js";

export const fnPosition = async () => {
    return await mouse.getPosition();
}

export const fnPositionSet = async (args: string[]) => {

    const XY = await fnPosition();
    
    args.push(XY.x.toString());
    args.push(XY.y.toString());
    args[1] = `${args[1]}`;
    args[2] = `${args[2]}`;

    return args.toString().replace(/[,]/i, ' ');
}