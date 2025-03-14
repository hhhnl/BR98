import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'layouts',
        meta: {
            title: '首页'
        },
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 路由守卫
router.beforeEach((to, from) => {
    // console.log(to.meta.title);
    document.title = to.meta.title
    // const token = localStorage.getItem('token')
    // if (!token && to.name !== 'login') {
    //     return { name: 'login' }
    // } else {
    //     return true
    // }
})

export default router