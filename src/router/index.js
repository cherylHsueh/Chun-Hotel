import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Home,
    children: [
      // 首頁
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
