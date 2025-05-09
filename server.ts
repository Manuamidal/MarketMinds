import WebSocket, { WebSocketServer } from 'ws';
import { getTotalStockEntries, stocks } from './lib/data.ts';

const wss=new WebSocketServer({port:3001});

let data1=stocks;
let count=0;

wss.on('connection', (ws: WebSocket) =>{
    ws.on('error', console.error);

    ws.on('message', function message(data: any) {
        if (count >= 20) {
            count = 0;
        }
        console.log('received: %s', data);

        // Add a delay before sending the response
        setTimeout(() => {
            ws.send(JSON.stringify(data1[count++]));
            console.log(data1[count],count);
        }, 5000); // 5000ms (5 seconds) delay
    });

    // Send the total stock entries immediately after connection
    ws.send(getTotalStockEntries());
});