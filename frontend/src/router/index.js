import { createRouter, createWebHistory } from "vue-router"
import FrontDeskView from '@/views/FrontDesk.vue'
import BackstageView from '@/views/Backstage.vue'
import FrontDeskMainView from '@/views/frontDesk/Main.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: FrontDeskView,
        children: [
            {
                path: '',
                component: FrontDeskMainView,
                meta: {
                    title: '首頁'
                },
            },
        ]
    },
    {
        path: '/admin',
        name: 'adminLogin',
        component: () => import('@/views/AdminLogin.vue'),
        meta: {
            title: '後台登入'
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