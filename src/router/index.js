import Vue from 'vue'
import VueRouter from 'vue-router'
import UserForm from '../views/UserForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/addUser',
    name: 'UserForm',
    component: UserForm
  },
  {
    path: '/',
    name: 'Users',
    component: () => import('../views/UsersList.vue')
  },
  {
    path: '/edit/:id',
    name: 'editUser',
    component: () => import('../views/updateUser.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
