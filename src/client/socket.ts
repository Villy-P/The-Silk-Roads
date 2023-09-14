/* eslint-disable @typescript-eslint/no-explicit-any */
import { IP_ADDRESS, SERVER_PORT } from '@/data/data';
import { getMerchantName } from '@/data/merchant';
import { User } from '@/scripts/interface';
import { StoreState } from '@/store/store';
import io from 'socket.io-client'
import { Router } from 'vue-router';
import { Store } from 'vuex';

export default function socketSetup(store: Store<StoreState>, router: Router) {
    store.state.socket = io(`https://${IP_ADDRESS}:${SERVER_PORT}/`, {
        withCredentials: true,
        extraHeaders: {
            'my-custom-header': "abcd"
        }
    });
    store.state.socket.on('userState', (message: string) => {
        const msg = JSON.parse(message);
        const users: User[] = msg.users;
        store.state.users = users;
        store.state.user = users.find((u) => u.username === store.state.username) || store.state.user;
    });
    store.state.socket.on('play', (message) => {
        const msg = JSON.parse(message);
        const users: User[] = msg.users;
        store.state.users = users;
        store.state.user = users.find((u) => u.username === store.state.username) || store.state.user;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        console.log(getMerchantName(store.state.user!.merchantType!));
        router.push("/play");
    });
}