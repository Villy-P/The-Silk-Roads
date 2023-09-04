import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { Game, User } from './client/sql'

export interface StoreState {
    currentGame: Game | null;
    currentUser: User | null;
    isLeader: boolean;
    currentPlayers: User[];
}

export const key: InjectionKey<Store<StoreState>> = Symbol()

export const store = createStore<StoreState>({
    state() {
        return {
            currentGame: null,
            currentUser: null,
            isLeader: false,
            currentPlayers: []
        }
    },
    mutations: {}
})