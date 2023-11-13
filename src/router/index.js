import { createRouter, createWebHistory } from "vue-router";

import TimelineHome from '../views/TimelineHome'
import TableHome from '../views/TableHome'
import CheckEvent from '../views/CheckEvent'
import DeleteEvent from '../views/DeleteEvent'

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
        },
        {
            path: '/check/event/:id',
            name: "CheckEvent",
            component: CheckEvent,
            props: true
        },
        {
            path: '/delete/event/:id',
            name: "DeleteEvent",
            component: DeleteEvent,
            props: true
        }
    ]
})

export default router