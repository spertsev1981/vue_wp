import Vue from 'vue'
import Router from 'vue-router'

import Users from '@/views/Users.vue'
import CreateUser from '@/views/CreateUser.vue'
import EditUser from '@/views/EditUser.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'user-list',
      component: Users
    },
    {
      path: '/create-user',
      name: 'create-user',
      component: CreateUser
    },
    {
      path: '/edit-user',
      name: 'edit-user',
      component: EditUser
    }
  ]
})
