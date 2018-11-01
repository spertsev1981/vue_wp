import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'user-list',
      component: () => import('@/views/Users')
    },
    {
      path: '/create-user',
      name: 'create-user',
      component: () => import('@/views/CreateUser')
    },
    {
      path: '/edit-user/:id',
      name: 'edit-user',
      component: () => import('@/views/EditUser')
    }
  ]
})

export default router
