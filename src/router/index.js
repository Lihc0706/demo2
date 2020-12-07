import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const aaa = () => import('../views/aaa')
const bbb = () => import('../views/bbb')
const ccc = () => import('../views/ccc')
const ddd = () => import('../views/ddd')
const eee = () => import('../views/eee')
const fff = () => import('../views/fff')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/aaa',
    name:'aaa',
    component:aaa
  },
  {
    path:'/bbb',
    name:'bbb',
    component:bbb
  },
  {
    path:'/ccc',
    name:'ccc',
    component:ccc
  },
  {
    path:'/ddd',
    name:'ddd',
    component:ddd
  },
  {
    path:'/eee',
    name:'eee',
    component:eee
  },
  {
    path:'/fff',
    name:'fff',
    component:fff
  },
]

const router = new VueRouter({
  routes
})

export default router
