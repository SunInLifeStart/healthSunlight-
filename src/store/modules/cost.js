/**
 * 成本store
 */
import {
  findPayments
} from 'api/payment'

import {
  SET_PAYMENTS,
  SET_FETCHING_PAYMENTS
} from '../../constants/payment'
import standardCost from './standardCost'

import investmentCost from './investmentCost'

export default {
  modules: {
    $standardCost: standardCost,
    $investmentCost: investmentCost
  },
  state: {
    payments: [],
    pagination: { pageIndex: 0, pageSize: 10, total: 0 },
    isFetchingPayments: false
  },

  mutations: {
    [SET_PAYMENTS](state, data) {
      state.payments = data
      state.pagination = { ...state.pagination, total: 12 }
    },
    [SET_FETCHING_PAYMENTS](state, isFetching) {
      state.isFetchingContracts = isFetching
    }
  },

  actions: {
    FindPayments({
      commit
    }) {
      commit(SET_FETCHING_PAYMENTS, true)
      return findPayments().then(data => {
        commit(SET_PAYMENTS, data)
        commit(SET_FETCHING_PAYMENTS, false)
        return data
      })
    }
  }
}
