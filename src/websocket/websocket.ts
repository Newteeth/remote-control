import WebSocket, { createWebSocketStream, WebSocketServer as WSWebSocketServer } from 'ws';
import { hendlerStart } from '../event_handling/hendler.js';
import { PORT_WEBSOCKET } from '../constants.js';

export const wss = new WSWebSocketServer({ port: PORT_WEBSOCKET });

wss.on('connection', async ws => {

    process.stdout.write(`Start connect websocket on ${PORT_WEBSOCKET} port\n`);
    createWebSocketStream(ws, ({encoding: 'utf-8'}));

    ws.on('message', async data => {
        
        const resWeb = JSON.stringify(`${data}`).replace(/"/g, '').split(' ');
        let str = JSON.stringify(await hendlerStart(resWeb));
        str = str.replace(/["]/g, '');
        ws.send(str);

        process.stdout.write(`command: ${resWeb}\n`);
    });
});
