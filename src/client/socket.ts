/* eslint-disable @typescript-eslint/no-explicit-any */
import { IP_ADDRESS, SERVER_PORT } from '@/data/data';
import { User } from '@/scripts/interface';
import { StoreState } from '@/store/store';
import io from 'socket.io-client'
import { Router } from 'vue-router';
import { Store } from 'vuex';

export default function socketSetup(store: Store<StoreState>, router: Router) {
    if (store.state.socket)
        return;
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
        router.push("/play");
    });
    store.state.socket.on('demandDebt', (user) => {
        const u: User | undefined = store.state.users.find((u) => u.username == JSON.parse(user).username);
        if (!u)
            return;
        if (u.username != store.state.user?.username)
            return;
        u.silver -= u.silverDebt;
        u.gold -= u.goldDebt;
        u.silverDebt = 0;
        u.goldDebt = 0;
        u.showDemandDebt = true;
        store.state.socket?.emit('updateUser', store.state.user);
    });
    store.state.socket.on("requestTrade", (sender, reciever) => {
        const u: User | undefined = store.state.users.find((u) => u.username == reciever);
        if (!u)
            return;
        if (u.username != store.state.user?.username)
            return;
        store.state.tradeRequests.push(sender);
    });
    store.state.socket.on("cancelRequestTrade", (sender, reciever) => {
        const u: User | undefined = store.state.users.find((u) => u.username == reciever);
        if (!u)
            return;
        if (u.username != store.state.user?.username)
            return;
        store.state.tradeRequests = store.state.tradeRequests.filter((u) => u != sender);
    });
    store.state.socket.on("refuseTrade", (sender, reciever) => {
        const r: User | undefined = store.state.users.find((u) => u.username == reciever);
        if (!r)
            return;
        if (r.username != store.state.user?.username)
            return;
        store.state.user.tradingWith = undefined;
        store.state.user.requestTradeWith = undefined;
        store.state.socket?.emit('updateUser', store.state.user);
    });
}