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
  return fetch.post(url.addTargetCostVersion, keywrods)
}

/**
 * 目标成本关联组团接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function targetCostCorrelationCluster(keywrods) {
  return fetch.post(url.targetCostCorrelationCluster, keywrods)
}

/**
 * 成功标尺接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function searchTargetCostSuccessMetrics(keywrods) {
  return fetch.post(url.searchTargetCostSuccessMetrics, keywrods)
}

/**
 * 基础版本信息接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function targetCostBasicVersion(keywrods) {
  return fetch.post(url.targetCostBasicVersion, keywrods)
}

/**
 * 项目规划指标总体指标基本信息、市政输入条件、景观指标、土方平衡查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examinePlanningOverallIndexBasicIndex(keywrods) {
  return fetch.post(url.examinePlanningOverallIndexBasicIndex, keywrods)
}

/**
 * 项目规划指标总体指标主要材料价格（不含税）查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examinePlanningOverallIndexMainPriceNo(keywrods) {
  return fetch.post(url.examinePlanningOverallIndexMainPriceNo, keywrods)
}
/**
 * 项目规划指标业态面积查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examinePlanningOverallIndexFormatArea(keywrods) {
  return fetch.post(url.examinePlanningOverallIndexFormatArea, keywrods)
}

/**
 * 目规划指标业态属性查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examinePlanningOverallIndexFormatAttribute(keywrods) {
  return fetch.post(url.examinePlanningOverallIndexFormatAttribute, keywrods)
}

/**
 * 项目配置规划表查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineProjectConfigurationSchedule(keywrods) {
  return fetch.post(url.examineProjectConfigurationSchedule, keywrods)
}

/**
 * 项目特殊事项清单查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineProjectSpecialItemInventory(keywrods) {
  return fetch.post(url.examineProjectSpecialItemInventory, keywrods)
}

/**
 * 目标成本关键指标变化查询接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function searchTargetCostKeyIndex(keywrods) {
  return fetch.post(url.searchTargetCostKeyIndex, keywrods)
}

/**
 * 版本信息楼栋信息查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineBuildingBasicVersion(keywrods) {
  return fetch.post(url.examineBuildingBasicVersion, keywrods)
}

/**
 * 项目规划指标总体指标总体指标查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examinePlanningOverallIndex(keywrods) {
  return fetch.post(url.examinePlanningOverallIndex, keywrods)
}

/**
 * 目标成本成本汇总表查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineTargetCostSummary(keywrods) {
  return fetch.post(url.examineTargetCostSummary, keywrods)
}

/**
 * 明目标成本成本测算调整费项查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineCostsCalculateAdjust(keywrods) {
  return fetch.post(url.examineCostsCalculateAdjust, keywrods)
}

/**
 * 目标成本成本测算调整合约规划查看详细、组团及楼栋分摊表查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineContractCalculateAdjust(keywrods) {
  return fetch.post(url.examineContractCalculateAdjust, keywrods)
}

/**
 * 目标成本成本测算调整测算查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineCalculateAdjust(keywrods) {
  return fetch.post(url.examineCalculateAdjust, keywrods)
}

/**
 * 非建安成本测算查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineNoneFabricationCalculateAdjust(keywrods) {
  return fetch.post(url.examineNoneFabricationCalculateAdjust, keywrods)
}

/**
 * 建安成本测算地基与基础工程、成本测算高层，非人防车库，人防车库层级选项，人防车库查看、成本测算洋房层级选项、成本测算洋房查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineFabricationBasicsCalculate(keywrods) {
  return fetch.post(url.examineFabricationBasicsCalculate, keywrods)
}

/**
 * 合约规划表中合约规划分解查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineContractDisassemble(keywrods) {
  return fetch.post(url.examineContractDisassemble, keywrods)
}

/**
 *财务口径分摊查看详细、管理口径分摊查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getCaliberApportion(keywrods) {
  return fetch.post(url.examineFinanceApportion, keywrods)
}

/**
 * 组团及楼栋分摊组团表查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineGroupBuildingApportion(keywrods) {
  return fetch.post(url.examineGroupBuildingApportion, keywrods)
}

/**
 * 组团及楼栋分摊组团楼栋表查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineGroupBuildingTable(keywrods) {
  return fetch.post(url.examineGroupBuildingTable, keywrods)
}

/**
 * 项目成本标尺项目成功标尺图表接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineSuccessMetricsDiagram(keywrods) {
  return fetch.post(url.examineSuccessMetricsDiagram, keywrods)
}

/**
 * 调整分析开发成本调整原因查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineCostAdjustmentReason(keywrods) {
  return fetch.post(url.examineCostAdjustmentReason, keywrods)
}

/**
 * 调整分析面积规划指标变化情况查看详细/导出接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineCostAdjustmentChange(keywrods) {
  return fetch.post(url.examineCostAdjustmentChange, keywrods)
}
/**
 * 调整分析面积规划指标变化情况查看详细/导出接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineCostAdjustmentAreaChange(keywrods) {
  return fetch.post(url.examineCostAdjustmentAreaChange, keywrods)
}

/**
 * 审核要点设计费限额查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineApproveDesignQuota(keywrods) {
  return fetch.post(url.examineApproveDesignQuota, keywrods)
}

/**
 * 审核要点负合约规划查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineApproveNegativeContract(keywrods) {
  return fetch.post(url.examineApproveNegativeContract, keywrods)
}

/**
 * 审核要点目标成本特征图表查看详细接口（2个：含土地费，不含土地费）
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineApproveTargetCharacteristic(keywrods) {
  return fetch.post(url.examineApproveTargetCharacteristic, keywrods)
}

/**
 * 审核要点目标成本含量及价格对比图表查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineApproveTargetPriceComparison(keywrods) {
  return fetch.post(url.examineApproveTargetPriceComparison, keywrods)
}
/**
 * 目标成本编制说明项目建造标准查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getConstructionStandard(keywrods) {
  return fetch.post(url.examineConstructionStandard, keywrods)
}

/**
 * 目标成本编制说明合约规划表中合约规划表查看详细接口
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function examineContract(keywrods) {
  return fetch.post(url.examineContractCalculateAdjust, keywrods)
}
