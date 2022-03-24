import { createRouter, createWebHistory } from 'vue-router'

import Login from './views/Login';
import Home from './views/Home';
import Card from './views/Card';

const routes = [
    {
        path:'/login',
        name:'login',
        component: Login
    },
    {
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/card/:userId',
        name:'card',
        component: Card
    },
];

const router = createRouter({
    history:  createWebHistory(),
    routes
});

export default router;