/**
 * 合同api
 * @param {*} data
 */
import fetch from './fetch'
import url from './url'

export function findContracts() {
  return fetch({
    url: url.findContracts,
    method: 'post'
  })
}
