import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '../views/MainPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: MainPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
