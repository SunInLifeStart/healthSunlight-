import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import $dashboard from './modules/dashboard'
import $contract from './modules/contract'
import $change from './modules/change'
import $payment from './modules/payment'
import $cost from './modules/cost'
import permission from './modules/permission'
import $demo from './modules/demo'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    $dashboard,
    $contract,
    $change,
    $payment,
    $cost,
    $demo,
    user,
    permission
  },
  getters
})

export default store
