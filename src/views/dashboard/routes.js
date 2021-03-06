import Layout from './layout/views/index.vue';
import moduleInfos from './modules';
export default [
    {
        path: '/',
        component: Layout,
        children: [
            { path: '', redirect: 'overview' },
            ...moduleInfos.routes,
        ],
    },
    { path: '*', beforeEnter(to, from, next) {
        next('/exception/404'); // 无法匹配的链接跳转到 404
    } },
];
