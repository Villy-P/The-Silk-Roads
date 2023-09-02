import webSocket from 'ws';
import http from 'http';

interface Message {
    type: string;
}

export default function initWebSocket(server: http.Server) {
    const socket = new webSocket.Server({ server });

    socket.on('connection', (ws) => {
        ws.on('message', (msg) => {
            const data: Message = JSON.parse(msg.toString());
            if (data.type == 'join') {
                console.log('Someone Joined!');
            }
        });
    });
}