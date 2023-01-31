import { createRouter, createWebHistory } from 'vue-router'
import estaAutenticado from '../guards/auth.guard'
import ProductoView from '../views/ProductoView.vue'
import admin from './admin'
import visitante from './visitante'
const router = createRouter({
  history: createWebHistory(),
  routes: [
   
    {
      path: '/',
      ...visitante
    },
    {
      path: '/dashboard',
      beforeEnter: [estaAutenticado],
      ...admin
    },
    {
      path: '/login',
      name:'login',
     component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/registro',
      name:'registro',
     component: () => import('@/views/RegistroView.vue')
    },
  ]
})
//GUARD GLOBAL
/* router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const user = JSON.parse(localStorage.getItem('user'))

  if (requiresAuth && !user) {
    next({ path: '/login' })
  } else {
    next()
  }
}) */
export default router
