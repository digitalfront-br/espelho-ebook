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
    path: '/gestao-financeira/modulo1',
    name: 'modulo1',
    component: () => import( '../views/ebook1/modulo1.vue')
  },
  {
    path: '/gestao-financeira/modulo2',
    name: 'modulo2',
    component: () => import( '../views/ebook1/modulo2.vue')
  },
  {
    path: '/gestao-financeira/modulo3',
    name: 'modulo3',
    component: () => import( '../views/ebook1/modulo3.vue')
  },
  {
    path: '/gestao-financeira/modulo4',
    name: 'modulo4',
    component: () => import( '../views/ebook1/modulo4.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "ebook/gestaofinanceira/",
  routes
})

export default router
