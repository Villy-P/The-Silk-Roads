import webSocket from 'ws';
import http from 'http';

interface Message {
    type: string;
    data: string;
}

function newPlayer(socket: webSocket.Server, data: string) {
    socket.clients.forEach((client) => {
        client.send(JSON.stringify({
            type: 'newPlayer',
            data: data
        }));
    });
}

function leftPlayer(socket: webSocket.Server, data: string) {
    socket.clients.forEach((client) => {
        client.send(JSON.stringify({
            type: 'playerLeft',
            data: data
        }));
    });
}

export default function initWebSocket(server: http.Server) {
    const socket = new webSocket.Server({ server });

    socket.on('connection', (ws) => {
        ws.on('message', (msg) => {
            const data: Message = JSON.parse(msg.toString());
            if (data.type == 'join')
                newPlayer(socket, data.data);
            if (data.type == 'left')
                leftPlayer(socket, data.data);
        });
    });
}