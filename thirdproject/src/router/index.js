import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'../views/login.vue')
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
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */'../views/signup.vue'),
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */'../views/contact.vue'),
    props: true
  },

  
  {
    path: '/tryitout',
    name: 'tryitout',
    component: () => import(/* webpackChunckName: "tryitout" */ '../views/tryitout.vue'),
    props: true
  },
  {
    path: '/allfoods/:check',
    name: 'allfoods',
    component: () => import(/* webpackChunkName: "contact" */'../views/allfoods.vue'),
    props: true,
    children:[
      {
        path: ':allcheck2',
        name: 'foodDetail',
        props: true,
        components: () => import(/* webpackChunkName: "fooddetails" */ '../views/foodDetail.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "contact" */'../views/notfound.vue'),
  
  },
  
]

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "my-new-active-class",
  routes
})

export default router
