import WebSocket, { WebSocketServer } from 'ws';

const wss=new WebSocketServer({port:3001});

let data1={ month: "June", price:0 };

wss.on('connection', (ws: WebSocket) =>{
    ws.on('error', console.error);
  
    ws.on('message', function message(data:any) {
      console.log('received: %s', data);
      data1.price+=Math.floor(Math.random() * 22)-10;
    });
    ws.send(JSON.stringify(data1));
});