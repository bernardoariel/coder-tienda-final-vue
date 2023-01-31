export default {
    name: 'dashboard',
    component: () => import('@/modulos/admin/layouts/AdminLayout.vue'),
      children: [
        {
          path: 'default',
          name: 'defaultadmin',
          component: () => import('@/modulos/admin/pages/DefaultPage.vue')
        }
        
      ]

}