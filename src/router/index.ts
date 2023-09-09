import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import LobbyPage from '../views/LobbyPage.vue'

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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
