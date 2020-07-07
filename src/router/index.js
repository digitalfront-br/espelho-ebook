import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/marketing-digital/modulo1',
    name: 'modulo1',
    component: () => import( '../views/ebook1/modulo1.vue')
  },
  {
    path: '/marketing-digital/modulo2',
    name: 'modulo2',
    component: () => import( '../views/ebook1/modulo2.vue')
  },
  {
    path: '/marketing-digital/modulo3',
    name: 'modulo3',
    component: () => import( '../views/ebook1/modulo3.vue')
  },
  {
    path: '/marketing-digital/modulo4',
    name: 'modulo4',
    component: () => import( '../views/ebook1/modulo4.vue')
  },
  {
    path: '/marketing-digital/modulo5',
    name: 'modulo5',
    component: () => import( '../views/ebook1/modulo5.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
