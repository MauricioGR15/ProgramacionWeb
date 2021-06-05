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
      path: '/personal',
      name: 'Personal',
      component: () => import('../views/CatalogoPersonal.vue')
    },
    {
      path: '/tickets',
      name: 'Tickets',
      component: () => import('../views/CatalogoTickets.vue')
    },
    {
      path: '/categorias-tickets',
      name: 'Categorias',
      component: () => import('../views/CategoriasTickets.vue')
    }
  ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router