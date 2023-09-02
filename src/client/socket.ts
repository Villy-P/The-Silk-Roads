const socketPort = 3030;
const socket = new WebSocket(`ws://localhost:${socketPort}`);

socket.addEventListener('open', () => {
    socket.send(JSON.stringify({
        type: 'join',
    }));
});