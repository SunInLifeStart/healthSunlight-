/**
 * 合同store
 */
import {
  findContracts
} from 'api/contract'

import {
  SET_CONTRACTS,
  SET_FETCHING_CONTRACTS
} from '../../constants/contract'

export default {
  state: {
    contracts: [],
    pagination: { pageIndex: 0, pageSize: 10, total: 0 },
    isFetchingContracts: false
  },

  mutations: {
    [SET_CONTRACTS](state, data) {
      state.contracts = data.data
      state.pagination = { ...state.pagination, total: data.total }
    },
    [SET_FETCHING_CONTRACTS](state, isFetching) {
      state.isFetchingContracts = isFetching
    }
  },

  actions: {
    FindContracts({
      commit
    }, data) {
      console.log(data)
      commit(SET_FETCHING_CONTRACTS, true)
      return findContracts().then(data => {
        commit(SET_CONTRACTS, data)
        commit(SET_FETCHING_CONTRACTS, false)
        return data
      })
    }
  }
}
