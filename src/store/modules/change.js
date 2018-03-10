/**
 * 合同store
 */
import {
  findChanges
} from 'api/change'

import {
  SET_CHANGES
} from '../../constants/change'

export default {
  state: {
    changes: [],
    pagination: { pageIndex: 0, pageSize: 10, total: 0 }
  },

  mutations: {
    [SET_CHANGES](state, data) {
      state.changes = data.data
      state.pagination = { ...state.pagination, total: data.total }
    }
  },

  actions: {
    FindChanges({
      commit
    }, data) {
      return findChanges(data).then(data => {
        commit(SET_CHANGES, data)
        return data
      })
    }
  }
}
