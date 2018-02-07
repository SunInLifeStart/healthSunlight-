/**
 * projects store
 */
import {
    getProjects
} from 'api/projects'

const projects = {
  state: {
    items: [
      { id: '001', name: 'venus', percentage: 70, status: 'success' },
      { id: '002', name: 'jupiter', percentage: 20, status: 'exception' }
    ]
  },

  mutations: {
    SET_PROJECTS: (state, data) => {
      state.items = data
    }
  },

  actions: {

    // 获取各个项目信息
    GetProjects({
      commit
    }, ids) {
      return getProjects(ids).then(result => {
        console.log(result, '1231312313123')
        commit('SET_PROJECTS', result)
        return result
      })
    }
  }
}

export default projects
