/* eslint-disable @typescript-eslint/no-explicit-any */
import { IP_ADDRESS, SERVER_PORT } from '@/data/data';
import { StoreState } from '@/store/store';
import io from 'socket.io-client'
import { Store } from 'vuex';

export let clientSocket: any;

export default function socketSetup(store: Store<StoreState>) {
    clientSocket = io(`https://${IP_ADDRESS}:${SERVER_PORT}/`, {
        withCredentials: true,
        extraHeaders: {
            'custom-header': "abcd"
        }
    });
    clientSocket.on('joined', (message: string) => {
        const msg = JSON.parse(message);
        store.state.users = msg.users;
        if (!store.state.user)
            store.state.user = msg.user;
    });
}