import {
  searchTargetCostCompanyName,
  searchTargetCostStagingInformation,
  searchTargetCostInformation,
  addTargetCostVersion,
  targetCostCorrelationCluster,
  searchTargetCostSuccessMetrics,
  targetCostBasicVersion,
  examinePlanningOverallIndexBasicIndex,
  examinePlanningOverallIndexMainPriceNo,
  examinePlanningOverallIndexFormatArea,
  examinePlanningOverallIndexFormatAttribute,
  examineProjectConfigurationSchedule,
  examineProjectSpecialItemInventory

} from 'api/targetCost'

import {
  VERSION_NAME,
  STAGING_INFORMATION,
  COST_INFORMATION,
  CORRELATION_CLUSTER,
  COST_SUCCESS_METRICS,
  COST_BASIC_VERSION,
  PLANNING_BASIC_OVERALL_INDEX,
  PLANNING_INDEX_MAIN_PRICE_NO,
  PLANNING_INDEX_FORMAT_AREA,
  PLANNING_INDEX_FORMAT_ATTRIBUTE,
  PROJECT_CONFIGURATION_SCHEDULE,
  PROJECT_SPECIAL_INVENTORY
} from '../../constants/targetCost'

const $investmentCost = {
  state: {
    companyNameData: {},
    stagingInformation: {},
    costInformation: {},
    correlationCluster: {},
    costSuccessMetrics: {},
    costBasicVersion: {},
    planningIndexOverallIndex: {},
    planningIndexMainPriceNo: {},
    planningIndexFormatArea: {},
    planningIndexFormatAttribute: {},
    projectConfigurationSchedule: {},
    projectSpecialInventory: {}
  },

  mutations: {
    [VERSION_NAME](state, data) {
      state.companyNameData = data
    },
    [STAGING_INFORMATION](state, data) {
      state.stagingInformation = data
    },
    [COST_INFORMATION](state, data) {
      state.costInformation = data
    },
    [CORRELATION_CLUSTER](state, data) {
      state.correlationCluster = data
    },
    [COST_SUCCESS_METRICS](state, data) {
      state.costSuccessMetrics = data
    },
    [COST_BASIC_VERSION](state, data) {
      state.costBasicVersion = data
    },
    [PLANNING_BASIC_OVERALL_INDEX](state, data) {
      state.planningIndexOverallIndex = data
    },
    [PLANNING_INDEX_MAIN_PRICE_NO](state, data) {
      state.planningIndexMainPriceNo = data
    },
    [PLANNING_INDEX_FORMAT_AREA](state, data) {
      state.planningIndexFormatArea = data
    },
    [PLANNING_INDEX_FORMAT_ATTRIBUTE](state, data) {
      state.planningIndexFormatAttribute = data
    },
    [PROJECT_CONFIGURATION_SCHEDULE](state, data) {
      state.projectConfigurationSchedule = data
    },
    [PROJECT_SPECIAL_INVENTORY](state, data) {
      state.projectSpecialInventory = data
    }

  },

  actions: {
    /**
     * 查询目标成本名称
     * @param commit
     * @param companyNameData
     * @returns {Promise<T>}
     * @constructor
     */
    getCompanyNameData({
                         commit
                       }, companyNameData) {
      return searchTargetCostCompanyName(companyNameData).then(res => {
        commit(VERSION_NAME, res.data)
        return res.data
      })
    },
    /**
     * 用于查看投模成本版本信息
     * @param commit
     * @param stagingInformation
     * @returns {Promise<T>}
     * @constructor
     */
    getStagingInformation({
                            commit
                          }, stagingInformation) {
      return searchTargetCostStagingInformation(stagingInformation).then(res => {
        commit(STAGING_INFORMATION, res.data)
        return res.data
      })
    },
    /**
     * 目标成本信息查询
     * @param commit
     * @param costInformation
     * @returns {Promise<T>}
     * @constructor
     */
    getCostInformation({
                         commit
                       }, costInformation) {
      return searchTargetCostInformation(commit).then(res => {
        commit(COST_INFORMATION, res.data)
        return res.data
      })
    },
    /**
     * 用于新增目标成本版本信息
     * @param commit
     * @param targetCostVersion
     * @returns {Promise<T>}
     * @constructor
     */
    addTargetCostVersion({
                           commit
                         }, targetCostVersion) {
      return addTargetCostVersion(targetCostVersion).then(res => {
        if (res.data.msg === 'success') {
          commit(STAGING_INFORMATION, targetCostVersion)
        }
        return res.data
      })
    },
    /**
     * 用于目标成本关联组团接口
     * @param commit
     * @param investmentVersionId
     * @returns {Promise<T>}
     * @constructor
     */
    getCorrelationCluster({
                            commit
                          }, correlationCluster) {
      return targetCostCorrelationCluster(correlationCluster).then(res => {
        if (res.data.msg === 'success') {
          commit(CORRELATION_CLUSTER, res.data)
        }
        return res.data
      })
    },
    /**
     * 成功标尺查询接口
     * @param commit
     * @param correlationCluster
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getCostSuccessMetrics({
                            commit
                          }, correlationCluster) {
      return searchTargetCostSuccessMetrics(correlationCluster).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_SUCCESS_METRICS, res.data)
        }
        return res.data
      })
    },
    /**
     * 基础版本信息
     * @param commit
     * @param costBasicVersion
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getCostBasicVersion({
                          commit
                        }, costBasicVersion) {
      return targetCostBasicVersion(costBasicVersion).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_SUCCESS_METRICS, res.data)
        }
        return res.data
      })
    },
    /**
     * 项目规划指标总体指标基本信息查看详细接口
     * @param commit
     * @param basicOverallIndex
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getCostBasicOverallIndex({
                          commit
                        }, basicOverallIndex) {
      return examinePlanningOverallIndexBasicIndex(basicOverallIndex).then(res => {
        if (res.data.msg === 'success') {
          commit(PLANNING_BASIC_OVERALL_INDEX, res.data)
        }
        return res.data
      })
    },
    /**
     * 项目规划指标总体指标主要材料价格（不含税）查看详细接口
     * @param commit
     * @param basicOverallIndex
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getPlanningOverallIndexMainPriceNo({
                          commit
                        }, basicOverallIndex) {
      return examinePlanningOverallIndexMainPriceNo(basicOverallIndex).then(res => {
        if (res.data.msg === 'success') {
          commit(PLANNING_BASIC_OVERALL_INDEX, res.data)
        }
        return res.data
      })
    },
    /**
     * 项目规划指标业态面积查看详细接口
     * @param commit
     * @param planningOverallIndexFormatArea
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getPlanningOverallIndexFormatArea({
                          commit
                        }, planningOverallIndexFormatArea) {
      return examinePlanningOverallIndexFormatArea(planningOverallIndexFormatArea).then(res => {
        if (res.data.msg === 'success') {
          commit(PLANNING_INDEX_FORMAT_AREA, res.data)
        }
        return res.data
      })
    },
    /**
     * 目规划指标业态属性查看详细接口
     * @param commit
     * @param planningOverallIndexFormatAttribute
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getPlanningOverallIndexFormatAttribute({
                          commit
                        }, planningOverallIndexFormatAttribute) {
      return examinePlanningOverallIndexFormatAttribute(planningOverallIndexFormatAttribute).then(res => {
        if (res.data.msg === 'success') {
          commit(PLANNING_INDEX_FORMAT_ATTRIBUTE, res.data)
        }
        return res.data
      })
    },
    /**
     *
     * @param commit
     * @param planningOverallIndexFormatAttribute
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getProjectConfigurationSchedule({
                          commit
                        }, planningOverallIndexFormatAttribute) {
      return examineProjectConfigurationSchedule(planningOverallIndexFormatAttribute).then(res => {
        if (res.data.msg === 'success') {
          commit(PROJECT_CONFIGURATION_SCHEDULE, res.data)
        }
        return res.data
      })
    },
    /**
     * 项目特殊事项清单查看详细接口
     * @param commit
     * @param projectSpecialInventory
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getProjectSpecialItemInventory({
                          commit
                        }, projectSpecialInventory) {
      return examineProjectSpecialItemInventory(projectSpecialInventory).then(res => {
        if (res.data.msg === 'success') {
          commit(PROJECT_SPECIAL_INVENTORY, res.data)
        }
        return res.data
      })
    }

  }

}

export default $investmentCost
