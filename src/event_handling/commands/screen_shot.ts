import { FileType, Region, screen } from "@nut-tree/nut-js";
import fs from 'fs';
import path from "path";
import { pipeline } from "stream";
import { fileURLToPath } from 'url';
import { wss } from "../../websocket/websocket.js";
import { fnPosition } from '../position/showPosition.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathDir = path.dirname(path.dirname(__dirname));
const pathScreenShot = path.join(pathDir, 'screenshots');



export const prntScrn = async (args: string[]) => {
    
    const XYScreen = await fnPosition();
    const XYRegion = new Region(XYScreen.x, XYScreen.y, 200, 200);
    const scr = await screen.captureRegion('screenShot', XYRegion, FileType.PNG, pathScreenShot);
    let pngScreen = fs.createReadStream(scr, 'base64');
    let screenStr: string;    
    return () => {
        pngScreen.on('data', async (chunk: string) => {
            return screenStr =  screenStr + chunk;
        });
        return pngScreen.on('end', async () => {
            screenStr = screenStr.replace(/[undefined]/g, '');
            args.push(screenStr);
            console.log(args.toString().replace(/[,]/i, ' '));
            return args.toString().replace(/[,]/i, ' ');
        });
    }
        // prnt_scrn {base64 string (png buf)}
}




