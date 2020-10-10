import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landingpage from '../views/landingpage.vue'
import Navbar from '../components/navbar.vue'
import Viewfood from '../views/viewfood.vue'
import Foodtable from '../views/foodtable.vue'


Vue.use(VueRouter)

  const routes = [
 
    {
      path: '/',
      name: 'navbar',
      component: Navbar,
      children: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
       
  {
    path: '/foodtable',
    name: 'foodtable',
    component: Foodtable
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/foodtable.vue')
  },
      ]
    },



  {
    path: '/landingpage',
    name: 'landingpage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Landingpage,
    children: [
      {
        path: '/',
        name: 'viewfood',
        component: Viewfood
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
