import { drawSquare } from "./commands/draw_square.js";
import { mouseUp } from "./commands/mouse_up.js";
import { mouseDown } from "./commands/mouse_down.js";
import { mouseRight } from "./commands/mouse_right.js";
import { mouseLeft } from "./commands/mouse_left.js";
import { drawRectangle } from "./commands/draw_rectangle.js";
import { drawCircle } from "./commands/draw_circle.js";
import { fnPositionSet } from "./position/showPosition.js";
import { prntScrn } from "./commands/screen_shot.js";

export const  hendlerStart = async (args: string[]) =>{

    switch (args[0]) {
        case 'draw_rectangle' : return drawRectangle(args);
        case 'draw_circle' : return drawCircle(args);
        case 'draw_square' : return drawSquare(args);
        case 'mouse_position' : return fnPositionSet(args);
        case 'mouse_up' : return mouseUp(args);
        case 'mouse_down' : return mouseDown(args);
        case 'mouse_right' : return mouseRight(args);
        case 'mouse_left' : return mouseLeft(args);
        case 'prnt_scrn' : return prntScrn(args);
    }
}
