/**
 * demo api
 * treeTable
 */
import fetch from './fetch'
import url from './url'

export function getTreeTable(data) {
  return fetch.post(url.getSpecialItem, {
    params: {
      data
    }
  })
}
export function saveSpecialItem(data) {
  return fetch.post(url.saveSpecialItem, {
    params: {
      data
    }
  })
}

