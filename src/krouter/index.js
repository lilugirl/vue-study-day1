import Vue from 'vue'
import VueRouter from './kvue-router'
import Home from '../views/Home.vue'

// 引入插件
// use方法将来会调用install方法
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[{
        path:'/about/info',
        component:{render(h){ return h('div','info page')}}
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
