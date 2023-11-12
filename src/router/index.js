import { createRouter, createWebHistory } from "vue-router";

import TimelineHome from '../views/TimelineHome'
import TableHome from '../views/TableHome'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: TimelineHome
        },
        {
            path: '/home/timeline',
            name: 'TimelineHome',
            component: TimelineHome
        },
        {
            path: '/home/table',
            name: "TableHome",
            component: TableHome
        }
    ]
})

export default router