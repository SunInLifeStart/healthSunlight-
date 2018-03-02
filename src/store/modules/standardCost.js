/**
 * 基准成本 store
 */
import {
  findStandardCost
} from 'api/standardCost'

import {
  SET_STANDARDCOSTS
} from '../../constants/standardCost'

const standardCost = {

  state: {
    standardCost: []
  },

  mutations: {
    [SET_STANDARDCOSTS](state, data) {
      state.standardCost = data
    }
  },

  actions: {
    // 基准成本查询接口
    FindStandardCost({ commit }, keywords) {
      return findStandardCost(keywords).then(res => {
        commit(SET_STANDARDCOSTS, res.data)
      })
    }
  }
}

export default standardCost
