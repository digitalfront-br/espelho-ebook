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
    path: '/tecnicas-vendas/modulo1',
    name: 'modulo1',
    component: () => import( '../views/ebook1/modulo1.vue')
  },
  {
    path: '/tecnicas-vendas/modulo2',
    name: 'modulo2',
    component: () => import( '../views/ebook1/modulo2.vue')
  },
  {
    path: '/tecnicas-vendas/modulo3',
    name: 'modulo3',
    component: () => import( '../views/ebook1/modulo3.vue')
  },
  {
    path: '/tecnicas-vendas/modulo4',
    name: 'modulo4',
    component: () => import( '../views/ebook1/modulo4.vue')
  },
  {
    path: '/tecnicas-vendas/modulo5',
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
