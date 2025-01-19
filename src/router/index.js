import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import setupRouterGuard from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/course/:id',
      name: 'course',
      component: () => import('../views/CourseView.vue'),
      props: true,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { requiresNoAuth: true }
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('../views/RegView.vue'),
      meta: { requiresNoAuth: true }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

setupRouterGuard(router)

export default router
