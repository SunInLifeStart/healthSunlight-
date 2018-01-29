/**
 * 所有的products
 */
const _ = require('lodash');

let products = [];
// 模拟100条数据
for (let i = 0; i < 100; i++) {
  products.push({
    id: i,
    name: '测试数据' + i
  })
}

module.exports = {
  // v1
  // getProduct: {
  //   code: 200,
  //   data: {
  //     items: [{
  //       name: '燕京啤酒'
  //     }],
  //     total: 15
  //   }
  // },

  // // v2
  // getProduct: function (start, limit, keyword) {
  //   keyword = keyword || ''
  //   const data = _.clone(products)
  //   const items = data.filter(item => {
  //     return item.name.indexOf(keyword) > -1
  //   }).splice(start, limit)
  //   return {
  //     code: 200,
  //     data: {
  //       items: items
  //     }
  //   }
  // }

  // v3
  getProduct: function (start, limit, keyword) {
    keyword = keyword || ''
    const data = _.clone(products)
    const matched = data.filter(item => {
      return item.name.indexOf(keyword) > -1
    })
    const total = matched.length
    const items = matched.splice(start, limit)
    return {
      items,
      total
    }
  },
  createProduct: function (data) {
    if (!data.name) {
      return {
        code: 301,
        msg: '数据不完整'
      }
    }
    products.push({
      id: products.length,
      name: data.name
    })
    return {}
  },
  updateProduct: function (data) {
    products = products.map(item => {
      if (item.id == data.id) {
        item.name = data.name
      }
      return item
    })
    return {}
  },
  deleteProduct: function (ids) {
    if (!ids) {
      return {
        code: 301,
        msg: '数据不完整'
      }
    }
    const removes = _.remove(products, function (item) {
      return ids.indexOf(item.id) > -1
    })
    return removes
  }

}
