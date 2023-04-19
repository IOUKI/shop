import { createRouter, createWebHistory } from "vue-router"
import FrontDeskView from '@/views/FrontDesk.vue'
import BackstageView from '@/views/Backstage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: FrontDeskView,
        meta: {
            title: '首頁'
        }
    },
    {
        path: '/backstage',
        name: 'backstage',
        component: BackstageView,
        meta: {
            title: '後台首頁'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router