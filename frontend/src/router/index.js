import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import('@/views/FrontDesk.vue'),
        children: [
            {
                path: '',
                name: 'frontDeskHome',
                component: () => import('@/views/frontDesk/Main.vue'),
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
        component: () => import('@/views/Backstage.vue'),
        children: [
            {
                path: '',
                name: 'backstageHome',
                component: () => import('@/views/backstage/Main.vue'),
                meta: {
                    title: '首頁'
                },
            },
        ]
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