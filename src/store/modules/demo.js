/**
 * demo store
 */
const demo = {
  state: {
    count: 0
  },
  mutations: {
    SET_COUNT: (state, data) => {
      state.count += parseInt(data)
    }
  },
  actions: {
    add({
      commit
    }, data) {
      console.log('SET_COUNT')
      commit('SET_COUNT', data)
    }
  }
}

export default demo
