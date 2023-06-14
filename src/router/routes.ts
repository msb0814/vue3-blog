import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import(/* webpackChunkName: "Article" */ '@/views/Article.vue')
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import(/* webpackChunkName: "archive" */ '@/views/Archive/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
  }
];

export default routes;
