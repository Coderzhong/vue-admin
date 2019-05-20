import { asyncRoutes, constantRoutes } from '@/router'
import cloneDeep from 'lodash/cloneDeep'

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
function hasPermission (permission, route) {
  if (route.meta && route.meta.permission) {
    let flag = false
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i])
      if (flag) {
        return true
      }
    }
    return false
  }
  return true
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param rules
 */
export function filterAsyncRoutes (routerMap, roles) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(roles.permissionList, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRoutes(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes ({ commit }, role) {
    return new Promise(resolve => {
      const accessedRoutes = filterAsyncRoutes(cloneDeep(asyncRoutes), role)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
