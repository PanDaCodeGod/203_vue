import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 路由列表
const routes = [
    // 入口
    {
        // 使用index来进行布局
        path: '/',
        component: () => import('@/views/index.vue'),
        redirect: '/home',
        children: [{
            // 首页_流水
            path: '/home',
            component: () => import('@/views/home.vue')
        }, {
            // 关于我 支付
            path: '/me_pay',
            component: () => import('@/views/me_pay.vue')

        }, {
            // 潘达工具箱
            path: '/panda_tools',
            component: () => import('@/views/panda_tools.vue')

        }, {
            // 账单详情
            path: '/bill',
            component: () => import('@/views/bill.vue')

        }, ]
    }
]

const router = new VueRouter({
    routes
})

// 路由守卫

export default router;