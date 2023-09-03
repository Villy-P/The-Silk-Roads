import { currentUser, isLeader } from "./current";

const socketPort = 3030;
let socket: WebSocket | null = null;

export function createSocket() {
    if (isLeader) {
        socket = new WebSocket(`ws://${currentUser?.ip}:${socketPort}`);
        console.log(`Created New Socket:\n\tIP: ${currentUser?.ip}\n\tPort: ${socketPort}`);
    }
}

export default function clientSocket() {
    socket?.addEventListener('open', () => {
        socket?.send(JSON.stringify({
            type: 'join',
        }));
    });
}