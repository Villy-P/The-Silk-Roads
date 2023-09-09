import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface StoreState {
    username: string;
}

export const key: InjectionKey<Store<StoreState>> = Symbol()

export const store = createStore<StoreState>({
    state() {
        return {
            username: ''
        }
    },
    mutations: {}
})