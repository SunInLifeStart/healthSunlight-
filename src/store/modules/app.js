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
    isFetching: false
  },
  mutations: {
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
