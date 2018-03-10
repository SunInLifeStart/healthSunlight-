/**
 * demo api
 * treeTable
 */
import fetch from './fetch'
import url from './url'

export function getTreeTable(data) {
  return fetch.post(url.getTreeTable, { params: {
    data
  }})
}
export function sum(num1, num2) {
  return num1 + num2
}

