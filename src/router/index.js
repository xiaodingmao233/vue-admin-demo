import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login'
import Home from '../pages/home'
import Layout from '../pages/layout'
import NotFound from '../pages/errorPage/404'
import Forbidden from '../pages/errorPage/403'

Vue.use(VueRouter)

// 解决重复路由跳转问题
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
