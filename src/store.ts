import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { Game } from './client/sql'

export interface StoreState {
    currentGame: Game | null
}

export const key: InjectionKey<Store<StoreState>> = Symbol()

export const store = createStore<StoreState>({
    state() {
        return {
            currentGame: null
        }
    },
    mutations: {}
})