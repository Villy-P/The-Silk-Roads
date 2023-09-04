import { StoreState } from '@/store';
import { Store } from 'vuex';

const socketPort = 3030;
export let socket: WebSocket | null = null;

export function createSocket(store: Store<StoreState>) {
    console.log(store.state)
    socket = new WebSocket(`ws://192.168.1.249:${socketPort}`);
    console.log(`Created New Socket:\n\tIP: 192.168.1.249\n\tPort: ${socketPort}`);
    socket.addEventListener('open', () => {
        socket?.send(JSON.stringify({
            type: 'join',
            data: store.state.currentUser
        }));
    });
    socket.addEventListener('message', (evt) => {
        const data = JSON.parse(evt.data);
        console.log(data);
        if (data.type === 'newPlayer') {
            store.state.currentPlayers.push(data.data);
            console.log(data.data);
        }
    });
}