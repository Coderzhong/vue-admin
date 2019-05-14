import { login, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/util/token'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  role: {},
  info: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLE: (state, role) => {
    state.role = role
  },
  SET_INFO: (state, info) => {
    state.info = info
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
        const { token, userInfo } = data
        const { name, avatar, role } = userInfo
        if (!role || role.permissions.length <= 0) {
          reject(new Error('role的permissions字段必须是个非空的数组'))
        }
        role.permissionList = role.permissions.map(permission => { return permission.permissionId })
        // 重新设置Cookie以重新设置cookie的过期时间
        setToken(token)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_ROLE', role)
        commit('SET_INFO', userInfo)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  logout ({ commit, state }) {
    // return new Promise((resolve, reject) => {
    //   logout(state.token).then(() => {
    //     处理逻辑
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
    commit('SET_TOKEN', '')
    commit('SET_NAME', '')
    commit('SET_ROLE', {})
    commit('SET_INFO', {})
    removeToken()
    resetRouter()
  },

  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLE', {})
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
