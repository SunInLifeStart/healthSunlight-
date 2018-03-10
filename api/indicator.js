/**
 * demo api
 * treeTable
 */
import fetch from './fetch'
import url from './url'

/**
 * 总体指标treeTable数据
 * @param data
 * @returns {AxiosPromise}
 */
export function getPlanningTreeTable(data) {
  return fetch.post(url.getPlanningTreeTable, {
    params: {
      data
    }
  })
}

/**
 * 业态面积treeTable
 * @param data
 * @returns {AxiosPromise}
 */
export function GetFormatAreaTreeTable(data) {
  return fetch.post(url.examinePlanningOverallIndexFormatArea, {
    params: {
      data
    }
  })
}

/**
 * 业态属性
 * @param data
 * @returns {AxiosPromise}
 * @constructor
 */
export function GetAttributeTreeTable(data) {
  return fetch.post(url.examinePlanningOverallIndexFormatAttribute, {
    params: {
      data
    }
  })
}

