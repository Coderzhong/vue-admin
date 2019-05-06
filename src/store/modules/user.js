import { login, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/util/token'

const state = {
  token: getToken(),
  name: '',
  roles: [],
  rules: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_RULES: (state, rules) => {
    state.rules = rules
  }
}

const actions = {
  login ({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(res => {
        const { code, data: { token } } = res
        if (code === 0) {
          commit('SET_TOKEN', token)
          setToken(token)
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  getUserInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo({ id: state.token }).then(res => {
        const { code, message, data } = res
        if (code !== 0) {
          reject(new Error(message))
        }
        const { token, userInfo: { name, roles, rules } } = data
        if (!roles || roles.length <= 0) {
          reject(new Error('roles字段必须是个非空的数组'))
        }
        if (!rules) {
          reject(new Error('rules不能为空'))
        }
        // 重新设置Cookie以重新设置cookie的过期时间
        setToken(token)
        commit('SET_NAME', name)
        commit('SET_ROLES', roles)
        commit('SET_RULES', rules)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout ({ commit, state }) {
    // return new Promise((resolve, reject) => {
    //   logout(state.token).then(() => {
    //     commit('SET_TOKEN', '')
    //     commit('SET_ROLES', [])
    //     commit('SET_RULES', {})
    //     removeToken()
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    commit('SET_RULES', {})
    removeToken()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
