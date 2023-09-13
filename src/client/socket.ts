/* eslint-disable @typescript-eslint/no-explicit-any */
import { IP_ADDRESS, SERVER_PORT } from '@/data/data';
import { StoreState } from '@/store/store';
import io, { Socket } from 'socket.io-client'
import { Router } from 'vue-router';
import { Store } from 'vuex';

export let clientSocket: Socket;

export default function socketSetup(store: Store<StoreState>, router: Router) {
    clientSocket = io(`https://${IP_ADDRESS}:${SERVER_PORT}/`, {
        withCredentials: true,
        extraHeaders: {
            'custom-header': "abcd"
        }
    });
    clientSocket.on('userState', (message: string) => {
        const msg = JSON.parse(message);
        store.state.users = msg.users;
        store.state.user = msg.user;
    });
    clientSocket.on('play', (message) => {
        const msg = JSON.parse(message);
        store.state.users = msg.users;
        store.state.user = msg.user;
        router.push("/play");
    });
}