/**
 * demo store
 */
import { getTreeTable } from 'api/demo'
import { SET_TREETABLE, INCREASE_COUNT, DECREASE_COUNT } from '../../constants/demo'
const $demo = {
  state: {
    treeTable: [], // treeTable数据
    count: 0
  },
  mutations: {
    [SET_TREETABLE]: (state, data) => {
      state.treeTable = data
    },
    [INCREASE_COUNT]: (state, step = '1') => {
      state.count += parseInt(step)
    },
    [DECREASE_COUNT]: (state, step = '1') => {
      if (state.count > 0) {
        state.count -= parseInt(step)
      }
    }
  },
  actions: {
    IncreaseCount({
      commit
    }, step) {
      commit(INCREASE_COUNT, step)
    },
    DecreaseCount({
      commit
    }, step) {
      commit(DECREASE_COUNT, step)
    },
    // 获取各个项目信息
    GetTreeTable({
      commit
    }, ids) {
      return getTreeTable(ids).then(res => {
        commit(SET_TREETABLE, res.data)
        return res.data
      })
    }
  }
}

export default $demo
