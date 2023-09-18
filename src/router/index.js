import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/page/HomeView.vue'),
            // children: [
            //     {
            //         path:'/',
            //         name: 'info',
            //         component: () => import('@/components/HomeInfo.vue'),
            //     },
            //
            //     {
            //         path:'/about',
            //         name: 'about',
            //         component: () => import('@/page/OrbisInfo.vue'),
            //     },
            // ]
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('@/page/TestView.vue'),
        }

    ]
})

export default router
