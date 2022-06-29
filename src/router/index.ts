import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { home } from './views/home'
import { test } from './views/test'

const routes: Array<RouteRecordRaw> = []

routes.push(home, test)

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router