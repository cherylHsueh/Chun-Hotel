import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reservation/:id',
    name: 'Reservation',
    component: () => import('@/views/Reservation.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('@/views/Success.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

// [ 路由切換滾動 ]
const scrollBehavior = (to, from, savedPosition) => {
  return { left: 0, top: 0 }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: scrollBehavior
})

export default router
