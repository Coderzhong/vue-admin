const state = {
  sidebar: {
    isCollapse: false
  }
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.isCollapse = !state.sidebar.isCollapse
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
