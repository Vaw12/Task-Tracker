import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
// import process from '../../node_modules/@types/node/process.d.ts';
// import { defaults } from 'json-server';

const routes = [
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(window.location.hash),
    routes,
  })
  export default router