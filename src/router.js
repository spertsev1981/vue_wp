import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'user-list',
      component: () => import('@/views/Users.vue')
    },
    {
      path: '/create-user',
      name: 'create-user',
      component: () => import('@/views/CreateUser.vue')
    },
    {
      path: '/edit-user/:id',
      name: 'edit-user',
      component: () => import('@/views/EditUser.vue')
    }
  ]
})

export default router
