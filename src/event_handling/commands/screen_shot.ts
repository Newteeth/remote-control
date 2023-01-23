import { Region, screen } from "@nut-tree/nut-js";
import Jimp from "jimp";
import { HEIGHT_SCREENSHOT, WIDTH_SCREENSHOT } from "../../constants.js";
import { fnPosition } from '../position/showPosition.js'


export const prntScrn = async (args: string[]) => {
    
    const XYScreen = await fnPosition();
    const XYRegion = new Region(XYScreen.x, XYScreen.y, WIDTH_SCREENSHOT, HEIGHT_SCREENSHOT);
    
    const screenShot = await (await screen.grabRegion(XYRegion)).toRGB();
    const png = new Jimp({ data: screenShot.data, width: screenShot.width, height: screenShot.height });
    const buff = await png.getBufferAsync(Jimp.MIME_PNG);
    const res = buff.toString("base64");
    args.push(res);

    return args.join(' ');
}
