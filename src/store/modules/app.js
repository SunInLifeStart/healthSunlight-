import {
  TOGGLE_SIDEBAR
} from '../../constants/app'

const localState = localStorage.getItem('longisland.app') ? JSON.parse(localStorage.getItem('longisland.app')) : {
  sidebar: {
    opened: true
  }
}

export default {
  state: {
    ...localState,
    contractDetail: false,
    isFetching: false
  },
  mutations: {
    postUrl(state, url) {
      if (url === '/contract/detail/1') {
        state.contractDetail = true
      } else if (url === '/contract/') {
        state.contractDetail = false
      }
    },
    [TOGGLE_SIDEBAR](state) {
      state.sidebar.opened = !state.sidebar.opened
      localStorage.setItem('longisland.app', JSON.stringify({ sidebar: { opened: state.sidebar.opened }}))
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit(TOGGLE_SIDEBAR)
    }
  }
}
