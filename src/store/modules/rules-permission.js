import { asyncRoutes, constantRoutes } from '@/router'
import { cloneDeep } from 'lodash'

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param rules
 */
export function filterAsyncRoutes (routes, rules) {
  return routes.filter(route => {
    if (rules[route.name]) {
      if (route.children) {
        route.children = filterAsyncRoutes(route.children, rules)
      }
      return true
    } else {
      return false
    }
  })
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
  generateRoutes ({ commit }, rules) {
    return new Promise(resolve => {
      let accessedRoutes
      if (Object.entries(rules).every(item => item[1])) {
        accessedRoutes = cloneDeep(asyncRoutes) || []
      } else {
        accessedRoutes = filterAsyncRoutes(cloneDeep(asyncRoutes), rules)
      }
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
