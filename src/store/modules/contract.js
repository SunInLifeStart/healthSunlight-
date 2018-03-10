/**
 * 合同store
 */
import {
  findContracts,
  jumpContract,
  obtainPayment
} from 'api/contract'

import {
  SET_CONTRACTS,
  JUMP_CONTRACT,
  SET_CONTRACTS_PAYMENT
} from '../../constants/contract'

export default {
  state: {
    contracts: [],
    pagination: { pageIndex: 0, pageSize: 10, total: 0 },
    jumpContract: [],
    obtainPayment: {
      paymentConditions: {}
    }
  },

  mutations: {
    [SET_CONTRACTS](state, data) {
      state.contracts = data.data
      state.pagination = { ...state.pagination, total: data.total }
    },
    [JUMP_CONTRACT](state, data) {
      console.log(data)
      state.jumpContract = data
    },
    [SET_CONTRACTS_PAYMENT](state, data) {
      state.obtainPayment = data.data
    }
  },

  actions: {
    FindContracts({
      commit
    }, data) {
      return findContracts(data).then(data => {
        commit(SET_CONTRACTS, data)
        return data
      })
    },
    JumpContract({
      commit
    }, keywords) {
      return jumpContract(keywords).then(data => {
        commit(JUMP_CONTRACT, data)
        return data
      })
    },
    ObtainPayment({
      commit
    }) {
      return obtainPayment().then(data => {
        commit(SET_CONTRACTS_PAYMENT, data)
        return data
      })
    }
  }
}
