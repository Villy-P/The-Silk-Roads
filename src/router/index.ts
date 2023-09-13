import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import LobbyPage from '../views/LobbyPage.vue';
import PlayPage from '../views/PlayPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: MainPage
    },
    {
        path: '/lobby',
        name: 'lobby',
        component: LobbyPage
    },
    {
        path: '/play',
        name: 'play',
        component: PlayPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
