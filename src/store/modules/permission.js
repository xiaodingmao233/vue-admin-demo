import { fetchPermission } from '../../api/index'
import router, { DynamicRoutes } from '../../router/index'
import dynamicRouter from '../../router/dynamic-router'
import { recursionRouter, setDefaultRoute } from '../../utils/recursion-router'

export default {
  namespaced: true,
  state: {
    permissionList: null,
    sidebarMenu: [], // 导航菜单
    currentMenu: '' // 高亮
  },
  getters: {},
  mutations: {
    SET_PERMISSION (state, routes) {
      state.permissionList = routes
    },
    CLEAR_PERMISSION (state) {
      state.permissionList = menu
    },
    SET_MENU (state, menu) {
      state.sidebarMenu = menu
    },
    CLEAR_MENU (state) {
      state.sidebarMenu = []
    }
  },
  actions: {
    async FETCH_PERMISSION({ commit, state }) {
      let permissionList = await fetchPermission()
      console.log(permissionList)
      // 筛选
      let routes = recursionRouter(permissionList, dynamicRouter)
      let MainContainer = DynamicRoutes.find(v => v.path === '')
      let children = MainContainer.children
      // console.log(routes)
      children.push(...routes)

      // 生成菜单
      commit('SET_MENU', children)

      // 设置默认路由
      setDefaultRoute([MainContainer])
      // 初始化路由
      let initiaRoutes = router.options.routes
      router.addRoutes(DynamicRoutes)
      commit('SET_PERMISSION', [...initiaRoutes, ...DynamicRoutes])
    }
  }
}
