import { createRouter, createWebHistory } from "vue-router";

import TimelineHome from '../views/TimelineHome'
import TableHome from '../views/TableHome'
import CheckEvent from '../views/CheckEvent'
import DeleteEvent from '../views/DeleteEvent'
import UpdateEvent from '../views/UpdateEvent'
import AddEvent from '../views/AddEvent'
import CheckCategories from '../views/CheckCategories'
import AddCategory from '../views/AddCategory'
import DeleteCategory from '../views/DeleteCategory'
import UpdateCategory from '../views/UpdateCategory'

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
            path: '/add/event',
            name: 'AddEvent',
            component: AddEvent
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
        },
        {
            path: '/update/event/:id',
            name: "UpdateEvent",
            component: UpdateEvent,
            props: true
        },
        {
            path: '/check/categories',
            name: 'CheckCategories',
            component: CheckCategories
        },
        {
            path: '/add/category',
            name: 'AddCategory',
            component: AddCategory
        },
        {
            path: '/delete/category/:name',
            name: "DeleteCategory",
            component: DeleteCategory,
            props: true
        },
        {
            path: '/update/category/:name',
            name: "UpdateCategory",
            component: UpdateCategory,
            props: true
        }
        
    ]
})

export default router