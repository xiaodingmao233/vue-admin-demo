import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import Login from '../pages/login'

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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
