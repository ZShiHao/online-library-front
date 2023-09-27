import {createRouter,createWebHashHistory} from 'vue-router';
import Home from '@/views/Home/index.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/book/:id', component: () => import('@/views/BookDetail/index.vue') },
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router
