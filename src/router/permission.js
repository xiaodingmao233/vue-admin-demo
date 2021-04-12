import router from './index'
import store from '../store/index'

router.beforeEach((to, from, next) => {
  if (!store.state.UserToken) {
    // 没有登录
    if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    // 已登录
    if (!store.state.permission.permissionList) {
      store.dispatch('permission/FETCH_PERMISSION').then(() => {
        next({
          path: to.path
        })
      })
    } else {
      // store存在权限
      if (to.path !== '/login') {
        next()
      } else {
        next(from.fullPath)
      }
    }
  }
})
