export default {
    name: 'usuarionologueado',
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
          path: 'producto/:id',
          component: () => import('@/views/ProductoView.vue')
        },
        { 
          path: 'producto/nuevo',
          name: 'productoUser',
          component: () => import('@/views/NuevoCursoView.vue'),
        },
        { 
          path: 'producto/otro/:id',
          component: () => import('@/views/ProductoOtroView.vue')
        },
        { 
          path: 'editar/:id',
          component: () => import('@/views/EditarView.vue')
        },
        { 
          path: 'carrito',
          name:'carrito',
          component: () => import('@/views/CarritoView.vue')
        },
        {
          path:'',
          redirect:{ name: 'defaultUser'}
        }
      ]

}