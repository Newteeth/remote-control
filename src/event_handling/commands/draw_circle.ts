import { mouse } from "@nut-tree/nut-js";
import { fnPosition } from "../position/showPosition.js";

export const drawCircle = async (args: string[]) => {

    const radius = +args[1];
    const circleLength = Math.round(2 * Math.PI * radius);
    const pos = await fnPosition();
    const coefficientXY = await fnPosition();
    coefficientXY.y = coefficientXY.y + radius;

    for (let i = 1; i <= circleLength; i++) {
        pos.x = Math.ceil(Math.cos(2 * Math.PI * i / circleLength) * radius + 0.5) + coefficientXY.x - radius;
        pos.y = Math.ceil(Math.sin(2 * Math.PI * i / circleLength) * radius + 0.5) + coefficientXY.y - radius;
        await mouse.move([pos]);
    }
    return args[0];
}
