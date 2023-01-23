import WebSocket, { WebSocketServer as WSWebSocketServer } from 'ws';
import { hendlerStart } from '../event_handling/hendler.js';
import fs from 'fs';

export const wss = new WSWebSocketServer({ port: 8080 });

wss.on('connection', async ws => {
    console.log(`start connect websocket`);
    ws.on('message', async data => {
        let resWeb = JSON.stringify(`${data}`).replace(/"/g, '').split(' ');
        let str = JSON.stringify(await hendlerStart(resWeb));
        str = str.replace(/["]/g, '');
        ws.send(str);

        process.stdout.write(`command: ${resWeb}\n`);
    });
});