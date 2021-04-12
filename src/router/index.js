import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login'
import Home from '../pages/home'
import Layout from '../pages/layout'
import NotFound from '../pages/errorPage/404'
import Forbidden from '../pages/errorPage/403'

Vue.use(VueRouter)

// 初始化路由
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

// 准备动态加载的路由
export const DynamicRoutes = [
  {
    path: '',
    component: Layout,
    name: 'container',
    redirect: 'home',
    meta: {
      requiresAuth: true,
      name: '首页'
    },
    children: [
      {      
        path: 'home',
        component: Home,
        name: 'home',
        meta: {
          name: '首页',
          icon: 'icon-home'
        }
      }
    ]
  },
  {
    path: '/403',
    component: Forbidden
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
