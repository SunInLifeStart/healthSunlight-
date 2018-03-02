/**
 * 投模成本
 */
import fetch from './fetch'
import url from './url'

/**
 * 投模成本主页查询接口
 * @param keyWords
 * @returns {AxiosPromise}
 */
export function getHomePage(keyWords) {
  return fetch.post(url.getHomePage, keyWords)
}

/**
 * 投模成本编制说明投模成本版本信息查询接口
 * @param investmentVersionId
 * @returns {AxiosPromise}
 */
export function costVersion(investmentVersionId) {
  return fetch.post(url.costVersion, { investmentVersionId: investmentVersionId })
}

/**
 * 投模成本编制说明投模成本版本信息修改接口
 * @param costVersion
 * @returns {AxiosPromise}
 */
export function updateCostVersion(costVersion) {
  return fetch.post(url.updateCostVersion, costVersion)
}

/**
 * 投模成本编制说明投模成本版本信息新增接口
 * @param costVersion
 * @returns {AxiosPromise}
 */
export function addCostVersion(costVersion) {
  return fetch.post(url.addCostVersion, costVersion)
}

/**
 * 投模成本编制说明投模成本版本摘要查询接口
 * @param investmentVersionId
 * @returns {AxiosPromise}
 */
export function costVersionSummary(investmentVersionId) {
  return fetch.post(url.costVersionSummary, { investmentVersionId: investmentVersionId })
}

/**
 * 投模成本主页删除接口
 * @param investmentcostid
 * @returns {AxiosPromise}
 */
export function deleteHomePage(investmentcostid) {
  return fetch.post(url.deleteHomePage, { investmentcostid: investmentcostid })
}

/**
 * 投模成本基本信息新增接口
 * @param costBase
 * @returns {AxiosPromise}
 */
export function costBase(costBase) {
  return fetch.post(url.addCostBase, costBase)
}

/**
 * 投模成本基本信息新增接口
 * @param costBase
 * @returns {AxiosPromise}
 */
export function addCostBase(costBase) {
  return fetch.post(url.addCostBase, costBase)
}
/**
 * 投模成本基本信息修改接口
 * @param costBase
 * @returns {AxiosPromise}
 */
export function updateCostBase(costBase) {
  return fetch.post(url.updateCostBase, costBase)
}

/**
 * 投模成本编制说明特殊事项清单层级选项、查询接口
 * @param investmentCostId
 * @returns {AxiosPromise}
 */
export function costSpecialMatter(investmentCostId) {
  return fetch.post(url.costSpecialMatter, { investmentCostId: investmentCostId })
}

/**
 * 投模成本编制说明特殊事项清单新增接口
 * @param costSpecialMatter
 * @returns {AxiosPromise}
 */
export function addCostSpecialMatter(costSpecialMatter) {
  return fetch.post(url.addCostSpecialMatter, costSpecialMatter)
}
/**
 * 投模成本编制说明特殊事项清单修改接口
 * @param costSpecialMatter
 * @returns {AxiosPromise}
 */
export function updateCostSpecialMatter(costSpecialMatter) {
  return fetch.post(url.updateCostSpecialMatter, costSpecialMatter)
}
/**
 * 投模成本编制说明特殊事项清单删除接口
 * @param investmentSpecialListId
 * @returns {AxiosPromise}
 */
export function deleteCostSpecialMatter(investmentSpecialListId) {
  return fetch.post(url.deleteCostSpecialMatter, { investmentSpecialListId: investmentSpecialListId })
}

/**
 * 投模成本编制说明投模成本-成本汇总层级选项、查询接口
 * @param investmentcostid
 * @returns {AxiosPromise}
 */
export function costs(investmentcostid) {
  return fetch.post(url.costs, { investmentcostid: investmentcostid })
}
/**
 * 投模成本编制说明投模成本-成本汇总层级选项、修改接口
 * @param cost
 * @returns {AxiosPromise}
 */
export function updateCost(cost) {
  return fetch.post(url.updateCost, cost)
}
/**
 * 投模成本编制说明投模成本-成本汇总层级选项、新增接口
 * @param cost
 * @returns {AxiosPromise}
 */
export function addCost(cost) {
  return fetch.post(url.addCost, cost)
}

/**
 * 投模成本编制说明投模成本-成本汇总导出接口
 * @param investmentcostsummaryid
 * @param Investmentcostsummaryurl
 * @returns {AxiosPromise}
 */
export function exportCost(investmentcostsummaryid, Investmentcostsummaryurl) {
  return fetch.post(url.exportCost, { investmentcostsummaryid, Investmentcostsummaryurl })
}

/**
 * 投模成本材料配置查询接口
 * @param investmentcostid
 * @returns {AxiosPromise}
 */
export function costMaterialAllocations(investmentcostid) {
  return fetch.post(url.costMaterialAllocations, { investmentcostid })
}
/**
 * 投模成本材料配置修改接口
 * @param costMaterialAllocation
 * @returns {AxiosPromise}
 */
export function updateCostMaterialAllocation(costMaterialAllocation) {
  return fetch.post(url.updateCostMaterialAllocation, costMaterialAllocation)
}
/**
 * 投模成本材料配置新增接口
 * @param costMaterialAllocation
 * @returns {AxiosPromise}
 */
export function addCostMaterialAllocation(costMaterialAllocation) {
  return fetch.post(url.addCostMaterialAllocation, costMaterialAllocation)
}

/**
 * 投模成本财务口径分摊查询接口
 * @param investmentcostid
 * @param sharetype
 * @returns {AxiosPromise}
 */
export function costFinancialApportionment(investmentcostid, sharetype) {
  return fetch.post(url.costFinancialApportionment, { investmentcostid, sharetype })
}

/**
 * 投模成本项目配置查询接口
 * @param investmentcostid
 * @returns {AxiosPromise}
 */
export function costProjectConfiguration(investmentcostid) {
  return fetch.post(url.costProjectConfiguration, { investmentcostid })
}
/**
 * 投模成本项目配置新增接口
 * @param costProjectConfiguration
 * @returns {AxiosPromise}
 */
export function addCostProjectConfiguration(costProjectConfiguration) {
  return fetch.post(url.addCostProjectConfiguration, costProjectConfiguration)
}
/**
 * 投模成本项目配置修改接口
 * @param costProjectConfiguration
 * @returns {AxiosPromise}
 */
export function updateCostProjectConfiguration(costProjectConfiguration) {
  return fetch.post(url.updateCostProjectConfiguration, costProjectConfiguration)
}

/**
 * 投模成本限额系数查询接口
 * @param investmentcostid
 * @returns {AxiosPromise}
 */
export function costLimitCoefficient(investmentcostid) {
  return fetch.post(url.costLimitCoefficient, { investmentcostid })
}

/**
 * 投模成本限额系数修改接口
 * @param costLimitCoefficient
 * @returns {AxiosPromise}
 */
export function updateCostLimitCoefficient(costLimitCoefficient) {
  return fetch.post(url.updateCostLimitCoefficient, costLimitCoefficient)
}

/**
 * 投模成本限额系数导出接口
 * @param investmentlimitdataid
 * @param investmentlimitdataurl
 * @returns {AxiosPromise}
 */
export function exportCostLimitCoefficient(investmentlimitdataid, investmentlimitdataurl) {
  return fetch.post(url.exportCostLimitCoefficient, { investmentlimitdataid, investmentlimitdataurl })
}

/**
 * 投模成本限额修正系数表引入
 * @param keyWords
 * @returns {AxiosPromise}
 */
export function importCostLimitCoefficient(keyWords) {
  return fetch.post(url.importCostLimitCoefficient, keyWords)
}
