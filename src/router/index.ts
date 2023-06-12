import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(), // 使用history模式
  routes
});

export default router;
