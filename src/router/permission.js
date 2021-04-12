import router from './index'
import store from '../store/index'

router.beforeEach((to, from, next) => {
  if (!store.state.UserToken) {
    // 没有登录
    console.log(to.matched, 'to.matched')
    if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
      console.log('1')
      next()
    } else {
      console.log('2')
      next({
        path: '/login'
      })
    }
  } else {
    // 已登录
    if (!store.state.permission.permissionList) {
      store.dispatch('permission/FETCH_PERMISSION').then(() => {
        console.log('3')
        next({
          path: to.path
        })
      })
    } else {
      // store存在权限
      if (to.path !== '/login') {
        console.log('4')
        next()
      } else {
        console.log('5')
        next(from.fullPath)
      }
    }
  }
})
