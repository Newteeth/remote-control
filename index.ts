import { HTTP_PORT } from "./src/constants.js";
import { httpServer } from "./src/http_server/index.js";
import { wss } from './src/websocket/websocket.js'

httpServer.listen(HTTP_PORT, () => {
    process.stdout.write(`Start static http server on the ${HTTP_PORT} port!\n`);
});

process.on('SIGINT', () => {
    httpServer.close((error) => {
        if (error) return error;
        websocket.close();
    }); 
});

const websocket = wss;
