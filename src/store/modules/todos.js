import {
    getTodos, test
} from 'api/todos'

const todos = {
  state: {

  },

  mutations: {
  },

  actions: {
    GetTodos({
      commit
    }, ids) {
      return getTodos(ids).then(result => {
        console.log(result)
        console.log(test())
        // commit()
        return result
      })
    },
    Test({
      commit
    }, ids) {
      return test(ids).then(result => {
        console.log(result, 'actions test')
        // console.log(test())
        // commit()
        return result
      })
    }
  }
}

export default todos
