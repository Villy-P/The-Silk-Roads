/* eslint-disable @typescript-eslint/no-explicit-any */
import { IP_ADDRESS, SERVER_PORT } from '@/data/data';
import { StoreState } from '@/store/store';
import io from 'socket.io-client'
import { Router } from 'vue-router';
import { Store } from 'vuex';

export default function socketSetup(store: Store<StoreState>, router: Router) {
    store.state.socket = io(`https://${IP_ADDRESS}:${SERVER_PORT}/`, {
        withCredentials: true,
        extraHeaders: {
            'custom-header': "abcd"
        }
    });
    store.state.socket.on('userState', (message: string) => {
        const msg = JSON.parse(message);
        store.state.users = msg.users;
    });
    store.state.socket.on('user', (message: string) => {
        const msg = JSON.parse(message);
        console.log(msg);
        store.state.user = msg.user;
    });
    store.state.socket.on('play', (message) => {
        const msg = JSON.parse(message);
        store.state.users = msg.users;
        router.push("/play");
    });
}