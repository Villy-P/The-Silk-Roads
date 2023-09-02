const socketPort = 3030;
const socket = new WebSocket(`ws://192.168.1.249:${socketPort}`);

export default function clientSocket() {
    socket.addEventListener('open', () => {
        socket.send(JSON.stringify({
            type: 'join',
        }));
    });
}