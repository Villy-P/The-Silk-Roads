import { User } from '@/scripts/interface';
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface StoreState {
    username: string;
    user: User | null;
    users: User[];
}

export const key: InjectionKey<Store<StoreState>> = Symbol()

export const store = createStore<StoreState>({
    state() {
        return {
            username: '',
            user: null,
            users: []
        }
    },
    mutations: {}
})