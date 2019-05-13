const state = {
  sidebar: {
    isCollapse: false
  },
  device: 'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.isCollapse = !state.sidebar.isCollapse
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  CLOSE_SIDEBAR: state => {
    state.sidebar.isCollapse = true
  },
  OPEN_SIDEBAR: state => {
    state.sidebar.isCollapse = false
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
