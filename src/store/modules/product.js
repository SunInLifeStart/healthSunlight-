import {
  deleteProduct
} from '../../../api/product'

const product = {
  state: {

  },

  mutations: {

  },

  actions: {
    DeleteProduct({
      commit
    }, ids) {
      return deleteProduct(ids).then(result => {
        // commit()
        return result
      })
    }
  }
}

export default product
