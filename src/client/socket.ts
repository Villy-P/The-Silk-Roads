import { currentUser, isLeader } from "./current";

const socketPort = 3030;
export let socket: WebSocket | null = null;

export function createSocket() {
    socket = new WebSocket(`ws://${currentUser?.ip}:${socketPort}`);
    console.log(`Created New Socket:\n\tIP: ${currentUser?.ip}\n\tPort: ${socketPort}`);
    socket?.addEventListener('open', () => {
        socket?.send(JSON.stringify({
            type: 'join',
        }));
    });
}