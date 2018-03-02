/**
 * 目标成本
 */
import fetch from './fetch'
import url from './url'
/**
 * 标成本项目名称查询接口
 * @param keyWords
 * @returns {AxiosPromise}
 */
export function searchTargetCostCompanyName(keyWords) {
  return fetch.post(url.searchTargetCostCompanyName, keyWords)
}
/**
 * 目标成本分期查询接口
 * @param keyWords
 * @returns {AxiosPromise}
 */
export function searchTargetCostStagingInformation(keyWords) {
  return fetch.post(url.searchTargetCostStagingInformation, keyWords)
}
/**
 * 目标成本信息查询接口
 * @param keyWords
 * @returns {AxiosPromise}
 */
export function searchTargetCostInformation(keyWords) {
  return fetch.post(url.searchTargetCostInformation, keyWords)
}

/**
 * 成本版本新增信息
 */
export function addTargetCostVersion(keywrods) {
  return fetch.post(url.addTargetCostVersion,keywrods)
}

/**
 * 目标成本关联组团接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function targetCostCorrelationCluster(keywrods) {
  return fetch.post(url.targetCostCorrelationCluster,keywrods)
}

/**
 * 成功标尺接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function searchTargetCostSuccessMetrics(keywrods) {
  return fetch.post(url.searchTargetCostSuccessMetrics,keywrods)
}

/**
 * 基础版本信息接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function targetCostBasicVersion(keywrods) {
  return fetch.post(url.targetCostBasicVersion,keywrods)
}

/**
 * 项目规划指标总体指标基本信息查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examinePlanningOverallIndexBasicIndex(keywrods) {
  return fetch.post(url.examinePlanningOverallIndexBasicIndex,keywrods)
}

/**
 * 项目规划指标总体指标主要材料价格（不含税）查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examinePlanningOverallIndexMainPriceNo(keywrods) {
  return fetch.post(url.examinePlanningOverallIndexMainPriceNo,keywrods)
}

/**
 * 项目规划指标业态面积查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examinePlanningOverallIndexFormatArea(keywrods) {
  return fetch.post(url.examinePlanningOverallIndexFormatArea,keywrods)
}

/**
 * 目规划指标业态属性查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examinePlanningOverallIndexFormatAttribute(keywrods) {
  return fetch.post(url.examinePlanningOverallIndexFormatAttribute,keywrods)
}

/**
 * 项目配置规划表查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineProjectConfigurationSchedule(keywrods) {
  return fetch.post(url.examineProjectConfigurationSchedule,keywrods)
}

/**
 * 项目特殊事项清单查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineProjectSpecialItemInventory(keywrods) {
  return fetch.post(url.examineProjectSpecialItemInventory,keywrods)
}
