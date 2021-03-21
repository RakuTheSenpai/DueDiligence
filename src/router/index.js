import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search'
import Company from '../views/Company'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/company',
    name: 'company',
    component: Company,
    props: true 
  }
]

const router = new VueRouter({
  routes
})

export default router
