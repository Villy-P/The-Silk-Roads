import { StoreState } from '@/store';
import { Store } from 'vuex';
import { User } from './sql';

const socketPort = 3030;
export let socket: WebSocket | null = null;

export function createSocket(store: Store<StoreState>) {
    socket = new WebSocket(`ws://192.168.1.249:${socketPort}`);
    console.log(`Created New Socket:\n\tIP: 192.168.1.249\n\tPort: ${socketPort}`);
    socket.addEventListener('open', () => {
        socket?.send(JSON.stringify({
            type: 'join',
            data: store.state.currentUser
        }));
    });
    socket.addEventListener('close', () => {
        socket?.send(JSON.stringify({
            type: 'left',
            data: store.state.currentUser
        }));
    });
    socket.addEventListener('message', (evt) => {
        const data = JSON.parse(evt.data);
        if (data.type === 'newPlayer')
            store.state.currentPlayers.push(data.data);
        if (data.type === 'playerLeft')
            store.state.currentPlayers = 
                store.state.currentPlayers.filter((user: User) => { user.id == data.data.id });
    });
}