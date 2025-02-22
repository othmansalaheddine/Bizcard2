import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path:'/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path:'/logout',
      name: 'logout',
      component: () => import('../views/Logout.vue')
    }
  ]
})

export default router
