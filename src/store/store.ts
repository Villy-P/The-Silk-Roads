import { User } from '@/scripts/interface';
import { Socket } from 'socket.io-client';
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface StoreState {
    username: string;
    user: User | null;
    users: User[];
    socket: Socket | null;
    showInventory: boolean;
    showCultureCards: boolean;
    showJournal: boolean;
    showDebtMenu: boolean;
    showInstructions: boolean;
    victory: boolean;
    tradeRequests: string[];
}

export const key: InjectionKey<Store<StoreState>> = Symbol()

export const store = createStore<StoreState>({
    state() {
        return {
            username: '',
            user: null,
            users: [],
            socket: null,
            showInventory: false,
            showCultureCards: false,
            showJournal: false,
            showDebtMenu: false,
            showInstructions: false,
            tradeRequests: [],
            victory: false
        }
    },
    mutations: {}
})