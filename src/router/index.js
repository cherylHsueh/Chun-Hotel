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

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
