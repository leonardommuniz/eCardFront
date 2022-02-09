import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home';
import Card from './views/Card';

const routes = [
    {
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/card',
        name:'card',
        component: Card
    },
];

const router = createRouter({
    history:  createWebHistory(),
    routes
});

export default router;