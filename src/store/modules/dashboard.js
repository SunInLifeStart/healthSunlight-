/**
 * 工作台store
 */
import {
    getItems
} from 'api/dashboard'

const dashboard = {
  state: {
    items: [
      { id: '001', name: 'venus', percentage: 70, status: 'success' },
      { id: '002', name: 'jupiter', percentage: 20, status: 'exception' }
      // {id:'003',name:'rome',percentage:40,status:'success'},
      // {id:'004',name:'cola',percentage:50,status:'success'},
      // {id:'005',name:'vue',percentage:60,status:'success'},
    ]
  },

  mutations: {
    SET_ITEMS: (state, data) => {
      state.items = data
    }
  },

  actions: {

    // 获取各个项目信息
    GetItems({
      commit
    }, ids) {
      return getItems(ids).then(result => {
        commit('SET_ITEMS', result)
        console.log(result)
        return result
      })
    }
  }
}

export default dashboard
