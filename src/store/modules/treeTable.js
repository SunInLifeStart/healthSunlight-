/**
 * treeTable store
 */
import { getTreeTable } from 'api/demo'

const treeTable = {
  state: {
  },

  mutations: {
    SET_TREETABLE: (state, data) => {
      state.items = data
    }
  },

  actions: {
    // 获取各个项目信息
    GetTreeTable({
      commit
    }, ids) {
      return getTreeTable(ids).then(result => {
        console.log('00000000000000000000000')
        commit('SET_TREETABLE', result)
        return result
      })
    }
  }
}

export default treeTable
