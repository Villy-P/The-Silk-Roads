/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IP_ADDRESS, SERVER_PORT } from '@/data/data';
import { User } from '@/scripts/interface';
import { GAME_STATE, TRADING_STATE } from '@/scripts/state';
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
        if (store.state.user!.imports.length > 0 && !store.state.user?.hasWon) {
            store.state.victory = true;
            store.state.user!.hasWon = true;
        }
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
        store.state.user.requestTradeWith = undefined;
        store.state.socket?.emit('updateUser', store.state.user);
    });
    store.state.socket.on("beginTrade", (sender, reciever) => {
        const r: User | undefined = store.state.users.find((u) => u.username == reciever);
        if (!r)
            return;
        if (r.username != store.state.user?.username)
            return;
        store.state.user.tradingWith = sender;
        store.state.user.isMainTrader = true;
        store.state.user.state = GAME_STATE.TRADING;
        store.state.user.tradingStage = TRADING_STATE.MANAGING;
        store.state.socket?.emit('updateUser', store.state.user);
    });
    store.state.socket.on("endTrade", (sender, reciever) => {
        const r: User | undefined = store.state.users.find((u) => u.username == reciever);
        if (!r)
            return;
        if (r.username != store.state.user?.username)
            return;
        store.state.user.tradingWith = undefined;
        store.state.user.requestTradeWith = undefined;
        store.state.user.state = GAME_STATE.IN_CITY;
        store.state.socket?.emit('updateUser', store.state.user);
    });
    store.state.socket.on("sendTrade", (trade, reciever) => {
        const r: User | undefined = store.state.users.find((u) => u.username == reciever);
        if (!r)
            return;
        if (r.username != store.state.user?.username)
            return;
        store.state.user.tradingStage = TRADING_STATE.EVAL_TRADE;
        store.state.user.currentTrade = JSON.parse(trade);
        store.state.socket?.emit('updateUser', store.state.user);
    });
    store.state.socket.on("acceptTrade", (reciever) => {
        const r: User | undefined = store.state.users.find((u) => u.username == reciever);
        if (!r)
            return;
        if (r.username != store.state.user?.username)
            return;
        const trade = store.state.user!.currentTrade!;
        store.state.user!.silver -= trade.giveSilver;
        store.state.user!.gold -= trade.giveGold;
        store.state.user!.silver += trade.recieveSilver;
        store.state.user!.gold += trade.recieveGold;
        for (const item of trade.recieve) {
            if (store.state.user?.imports.includes(item))
                store.state.user?.imports.splice(store.state.user?.imports.indexOf(item), 1);
            else
                store.state.user?.items.push(item);
        }
        for (const item of trade.give)
            store.state.user?.items.splice(store.state.user?.items.indexOf(item), 1);
        store.state.user.tradingStage = TRADING_STATE.TRADE_ACCEPTED;
        store.state.user.journal.push(`I traded some items with ${store.state.user!.tradingWith}.`)
        store.state.socket?.emit('updateUser', store.state.user);
    });
    store.state.socket.on("countertrade", (reciever) => {
        const r: User | undefined = store.state.users.find((u) => u.username == reciever);
        if (!r)
            return;
        if (r.username != store.state.user?.username)
            return;
        store.state.user.tradingStage = TRADING_STATE.WAITING;
        store.state.socket?.emit('updateUser', store.state.user);
    });
}