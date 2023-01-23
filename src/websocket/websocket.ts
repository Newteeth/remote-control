import WebSocket, { createWebSocketStream, WebSocketServer as WSWebSocketServer } from 'ws';
import { hendlerStart } from '../event_handling/hendler.js';
import { PORT_WEBSOCKET } from '../constants.js';

export const wss = new WSWebSocketServer({ port: PORT_WEBSOCKET });

wss.on('connection', async ws => {

    process.stdout.write(`Start connect websocket on ${PORT_WEBSOCKET} port\n`);

    let wsStreem = createWebSocketStream(ws, ({ decodeStrings: false }));

    wsStreem.on('data', async data => {
        const resWeb = JSON.stringify(`${data}`).replace(/"/g, '').split(' ');
        let str = JSON.stringify(await hendlerStart(resWeb));
        str = str.replace(/["]/g, '');
        ws.send(str);

        process.stdout.write(`command: ${resWeb}\n`);
    });
});
