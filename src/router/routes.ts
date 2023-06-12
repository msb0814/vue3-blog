import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "articles" */ '../views/Home.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import(/* webpackChunkName: "articles" */ '../views/Articles.vue')
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import(/* webpackChunkName: "archive" */ '../views/Archive.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  }
];

export default routes;
