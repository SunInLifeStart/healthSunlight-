import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import product from './modules/product'
import todos from './modules/todos'
import dashboard from './modules/dashboard'
import permission from './modules/permission'
import projects from './modules/projects'
import demo from './modules/demo'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    product,
    todos,
    dashboard,
    projects,
    demo,
    permission
  },
  getters
})

export default store
