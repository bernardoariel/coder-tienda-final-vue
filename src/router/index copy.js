import { createRouter, createWebHistory } from 'vue-router'
import ProductoView from '../views/ProductoView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
   
    {
      path: '/',
      name: 'usuarionologueado',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/modulos/users/layouts/UserLayout.vue'),
      children: [
        {
          path: 'default',
          name: 'defaultUser',
          component: () => import('@/modulos/clientes/pages/DefaultPage.vue')
        },
        {
          path: 'tienda',
          name: 'tiendaUser',
          component: () => import('@/views/TiendaView.vue')
        },
        {
          path:'',
          redirect:{ name: 'defaultUser'}
        },
        { 
          path: 'producto/:id',
          name: 'productoUser',
          component: ProductoView
        },
        { 
          path: 'producto/nuevo',
          name: 'productoUser',
          component: () => import('@/views/NuevoCursoView.vue'),
        },
        { 
          path: 'producto3/otro/:id',
          component: () => import('@/views/ProductoOtroView.vue')
        },
        { 
          path: 'editar/:id',
          component: () => import('@/views/EditarView.vue')
        }
        
      ]
    },
    {
      path: '/clientes',
      name: 'clientes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/modulos/clientes/layouts/ClienteLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'default',
          name: 'defaultCli',
          component: () => import('@/modulos/clientes/pages/DefaultPage.vue')
        },
        {
          path:'',
          redirect:{ name: 'defaultCli'}
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/modulos/admin/layouts/AdminLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'defaultAdmin',
          component: () => import('@/modulos/admin/pages/DefaultPage.vue')
        },
        {
          path:'',
          redirect:{ name: 'defaultAdmin'}
        }
      ]
    },
    {
      path: '/login',
      name:'login',
     component: () => import('@/views/LoginView.vue')
    },
    {
      path:'/salir',
      name:'salir',
      component: () => import('@/components/shared/SalirComponent.vue')
    },
    /* { 
      path: '/:pathMatch(.*)*', 
      component:  ()=> import( "@/views/NoPageFound.vue/") ,
      redirect: {name:'usuarionologueado'}
  }, */
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
