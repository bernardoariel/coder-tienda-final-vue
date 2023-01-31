export default {
    name: 'dashboard',
    component: () => import('@/modulos/admin/layouts/AdminLayout.vue'),
      children: [
        {
          path: 'default',
          name: 'defaultadmin',
          component: () => import('@/modulos/admin/pages/DefaultPage.vue')
        },
        {
          path: '/editarusuario/:id',
          name: 'editarusuario',
          component: () => import('../modulos/admin/pages/EditarUsuarios.vue')
        }
      ]

}