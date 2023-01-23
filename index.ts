import { httpServer } from "./src/http_server/index.js";
import { wss } from './src/websocket/websocket.js'

const HTTP_PORT = 8181;

httpServer.listen(HTTP_PORT, () => {
    console.log(`Start static http server on the ${HTTP_PORT} port!`);
});

process.on('SIGINT', () => {
    httpServer.close((error) => {
        if (error) return error;
        websocket.close();
    }); 
});

const websocket = wss;