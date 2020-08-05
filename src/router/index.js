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
    path: '/gestao-estrategica/modulo1',
    name: 'modulo1',
    component: () => import( '../views/ebook1/modulo1.vue')
  },
  {
    path: '/gestao-estrategica/modulo2',
    name: 'modulo2',
    component: () => import( '../views/ebook1/modulo2.vue')
  },
  {
    path: '/gestao-estrategica/modulo3',
    name: 'modulo3',
    component: () => import( '../views/ebook1/modulo3.vue')
  },
  {
    path: '/gestao-estrategica/modulo4',
    name: 'modulo4',
    component: () => import( '../views/ebook1/modulo4.vue')
  },
  {
    path: '/gestao-estrategica/modulo5',
    name: 'modulo5',
    component: () => import( '../views/ebook1/modulo5.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: 'ebook/gestaoestrategica/',
  routes
})

export default router
