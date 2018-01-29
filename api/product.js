import fetch from './fetch'
import url from './url';

/**
 * 获取产品列表
 *
 * @export
 * @param {any} start 开始查询位置
 * @param {any} limit 每页显示数量
 * @param {any} keyword
 * @returns
 */
export function getProduct(start, limit, keyword) {
  return fetch.get(url.product, {
    params: {
      start,
      limit,
      keyword
    }
  })
}
export function createProduct(name) {
  return fetch.post(url.product, {
    name
  })
}
export function updateProduct(id, name) {
  return fetch.put(url.product, {
    id,
    name
  })
}
export function deleteProduct(ids) {
  return fetch.delete(url.product, {
    data: {
      ids
    }
  })
}
