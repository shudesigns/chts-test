import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Employees from '@/views/Employees.vue'
import Rwd from '@/views/Rwd.vue'
import Map from '@/views/Map.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/rwd',
    name: 'Rwd',
    component: Rwd
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
