/**
 * 成本store
 */
import {
  findPayments,
  findPayment
} from 'api/payment'

import {
  SET_PAYMENT,
  SET_PAYMENTS,
  SET_FETCHING_PAYMENTS,
  SET_FETCHING_PAYMENT
} from '../../constants/payment'

export default {
  state: {
    payments: [],
    pagination: { pageIndex: 0, pageSize: 10, total: 0 },
    isFetchingPayments: false,

    contract: {},
    paymentInformation: {},
    productionTable: [],
    accessoryTable: [],
    payment: {},
    capitalPlan: [],
    capitalPlan1: [],
    capitalPlan2: [],
    capitalPlan3: [],
    capitalPlan4: [],
    capitalPlan5: [],
    capitalPlan6: [],
    capitalPlan7: [],
    capitalPlan8: []
  },

  mutations: {
    [SET_FETCHING_PAYMENTS](state, isFetching) {
      state.isFetchingPayments = isFetching
    },
    [SET_PAYMENTS](state, data) {
      state.payments = data.list
      state.pagination = { ...state.pagination, total: data.total }
    },
    [SET_FETCHING_PAYMENT](state, isFetching) {
      state.isFetchingPayments = isFetching
    },
    [SET_PAYMENT](state, data) {
      state.contract = data.data.contract
      state.paymentInformation = data.data.paymentInformation
      state.productionTable = data.data.productionTable
      state.accessoryTable = data.data.accessoryTable
      state.payment = data.data.payment
      state.capitalPlan = data.data.capitalPlan
      state.capitalPlan1 = data.data.capitalPlan1
      state.capitalPlan2 = data.data.capitalPlan2
      state.capitalPlan3 = data.data.capitalPlan3
      state.capitalPlan4 = data.data.capitalPlan4
      state.capitalPlan5 = data.data.capitalPlan5
      state.capitalPlan6 = data.data.capitalPlan6
      state.capitalPlan7 = data.data.capitalPlan7
      state.capitalPlan8 = data.data.capitalPlan8
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
    },
    FindPayment({
      commit
    }) {
      commit(SET_FETCHING_PAYMENT, true)
      return findPayment().then(data => {
        commit(SET_PAYMENT, data)
        commit(SET_FETCHING_PAYMENT, false)
        return data
      })
    }
  }
}
