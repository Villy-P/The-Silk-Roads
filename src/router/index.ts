import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import GameLobby from '../views/GameLobby.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: MainPage
    },
    {
        path: '/lobby',
        name: 'lobby',
        component: GameLobby
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
