import {
  searchTargetCostCompanyName,
  searchTargetCostStagingInformation,
  searchTargetCostInformation,
  addTargetCostVersion,
  targetCostCorrelationCluster,
  searchTargetCostSuccessMetrics,
  targetCostBasicVersion,
  examineBuildingBasicVersion,
  examinePlanningOverallIndexBasicIndex,
  examinePlanningOverallIndex,
  searchTargetCostKeyIndex,
  examinePlanningOverallIndexMainPriceNo,
  examinePlanningOverallIndexFormatArea,
  examinePlanningOverallIndexFormatAttribute,
  examineProjectConfigurationSchedule,
  examineProjectSpecialItemInventory,
  examineTargetCostSummary,
  examineCostsCalculateAdjust,
  examineContractCalculateAdjust,
  examineCalculateAdjust,
  examineNoneFabricationCalculateAdjust,
  examineFabricationBasicsCalculate,
  examineContractDisassemble,
  getCaliberApportion,
  examineGroupBuildingApportion,
  examineSuccessMetricsDiagram,
  examineCostAdjustmentReason,
  examineCostAdjustmentChange,
  examineCostAdjustmentAreaChange,
  examineApproveDesignQuota,
  examineApproveNegativeContract,
  examineApproveTargetCharacteristic,
  examineApproveTargetPriceComparison,
  examineContract,
  getConstructionStandard,
  examineGroupBuildingTable
} from 'api/targetCost'

import {
  VERSION_NAME,
  STAGING_INFORMATION,
  COST_INFORMATION,
  CORRELATION_CLUSTER,
  COST_SUCCESS_METRICS,
  COST_BASIC_VERSION,
  COST_BASIC_VERSION_BUILDING,
  PLANNING_BASIC_OVERALL_INDEX,
  PLANNING_OVERALL_INDEX,
  PLANNING_KEY_INDEX,
  PLANNING_INDEX_MAIN_PRICE_NO,
  PLANNING_INDEX_FORMAT_AREA,
  PLANNING_INDEX_FORMAT_ATTRIBUTE,
  PROJECT_CONFIGURATION_SCHEDULE,
  PROJECT_SPECIAL_INVENTORY,
  COST_SUMMARY,
  COST_CALCULATE_ADJUST,
  CONTRACT_CALCULATE_ADJUST,
  NONE_FABRICATION_CALCULATE_ADJUST,
  FABRICATION_BASICS_CALCULATE,
  CONTRACT_CALCULATE_DISASSEMBLE,
  SET_FINANCE_APPORTION,
  GROUP_BUILDING_APPORTION,
  SUCCESS_METRICS_DIAGRAM,
  COST_ADJUSTMENT_REASON,
  COST_ADJUSTMENT_CHANGE,
  APPROVE_DESIGN_QUOTA,
  APPROVE_NEGATIVE_CONTRACT,
  APPROVE_TARGET_CHARACTERISTIC,
  APPROVE_TARGET_PRICE_COMPARISON,
  CONSTRUCTION_STANDARD,
  CONTRACT_TABLE,
  SET_MANAGE_APPORTION
} from '../../constants/targetCost'
import indicator from './indicator'

const targetCost = {
  modules: {
    indicator
  },
  state: {
    versionName: {},
    stagingInformation: {},
    costInformation: [],
    correlationCluster: {},
    costSuccessMetrics: {},
    costBasicVersion: {},
    costSummary: {},
    costCalculateAdjust: {},
    costBasicVersionBuilding: {},
    planningOverallIndex: {},
    planningBasicOverallIndex: {},
    planningKeyIndex: {},
    planningIndexMainPriceNo: {},
    planningIndexFormatArea: {},
    planningIndexFormatAttribute: {},
    projectConfigurationSchedule: {},
    projectSpecialInventory: {},
    calculateAdjust: {},
    noneFabricationCalculateAdjust: {},
    fabricationBasicsCalculate: {},
    contractCalculateDisassemble: {},
    financeApportion: {
      columns: [{}],
      items: [{}]
    }, // 财务口径分摊
    groupBuildingApportion: {},
    successMetricsDiagram: {},
    costAdjustmentReason: {},
    costAdjustmentChange: {},
    approveDesignQuota: {},
    approveTargetCharacteristic: {},
    approveTargetPriceComparison: {},
    constructionStandard: {},
    contractTable: {},
    manageApportion: {
      columns: [{}],
      items: [{}]
    } // 管理口径分摊
  },

  mutations: {
    [VERSION_NAME](state, data) {
      state.versionName = data
    },
    [STAGING_INFORMATION](state, data) {
      state.stagingInformation = data
    },
    [COST_INFORMATION](state, data) {
      state.costInformation = data
    },
    [COST_SUMMARY](state, data) {
      state.costSummary = data
    },
    [COST_CALCULATE_ADJUST](state, data) {
      state.costCalculateAdjust = data
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
    [COST_BASIC_VERSION_BUILDING](state, data) {
      state.costBasicVersionBuilding = data
    },
    [PLANNING_BASIC_OVERALL_INDEX](state, data) {
      state.planningBasicOverallIndex = data
    },
    [PLANNING_OVERALL_INDEX](state, data) {
      state.planningOverallIndex = data
    },
    [PLANNING_INDEX_MAIN_PRICE_NO](state, data) {
      state.planningIndexMainPriceNo = data
    },
    [PLANNING_INDEX_FORMAT_AREA](state, data) {
      state.planningIndexFormatArea = data
    },
    [PLANNING_KEY_INDEX](state, data) {
      state.planningKeyIndex = data
    },
    [PLANNING_INDEX_FORMAT_ATTRIBUTE](state, data) {
      state.planningIndexFormatAttribute = data
    },
    [PROJECT_CONFIGURATION_SCHEDULE](state, data) {
      state.projectConfigurationSchedule = data
    },
    [PROJECT_SPECIAL_INVENTORY](state, data) {
      state.projectSpecialInventory = data
    },
    [CONTRACT_CALCULATE_ADJUST](state, data) {
      state.contractCalculateAdjust = data
    },
    [NONE_FABRICATION_CALCULATE_ADJUST](state, data) {
      state.noneFabricationCalculateAdjust = data
    },
    [FABRICATION_BASICS_CALCULATE](state, data) {
      state.fabricationBasicsCalculate = data
    },
    [CONTRACT_CALCULATE_DISASSEMBLE](state, data) {
      state.contractCalculateDisassemble = data
    },
    [SET_FINANCE_APPORTION](state, data) {
      state.financeApportion = data
    },
    [GROUP_BUILDING_APPORTION](state, data) {
      state.groupBuildingApportion = data
    },
    [SUCCESS_METRICS_DIAGRAM](state, data) {
      state.successMetricsDiagram = data
    },
    [COST_ADJUSTMENT_REASON](state, data) {
      state.costAdjustmentReason = data
    },
    [COST_ADJUSTMENT_CHANGE](state, data) {
      state.costAdjustmentChange = data
    },
    [APPROVE_DESIGN_QUOTA](state, data) {
      state.approveDesignQuota = data
    },
    [APPROVE_NEGATIVE_CONTRACT](state, data) {
      state.approveNegativeContract = data
    },
    [APPROVE_TARGET_CHARACTERISTIC](state, data) {
      state.approveTargetCharacteristic = data
    },
    [APPROVE_TARGET_PRICE_COMPARISON](state, data) {
      state.approveTargetPriceComparison = data
    },
    [CONSTRUCTION_STANDARD](state, data) {
      state.constructionStandard = data
    },
    [CONTRACT_TABLE](state, data) {
      state.contractTable = data
    },
    [SET_MANAGE_APPORTION](state, data) {
      state.manageApportion = data
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
      return searchTargetCostInformation(costInformation).then(res => {
        commit(COST_INFORMATION, res.data)
        return res.data
      })
    },
    /**
     * 目标成本成本汇总表查看详细接口
     * @param commit
     * @param costSummary
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getCostSummary({
      commit
    }, costSummary) {
      return examineTargetCostSummary(costSummary).then(res => {
        commit(COST_SUMMARY, res.data)
        return res.data
      })
    },
    getCostCalculateAdjust({
      commit
    }, costCalculateAdjust) {
      return examineCostsCalculateAdjust(costCalculateAdjust).then(res => {
        commit(COST_CALCULATE_ADJUST, res.data)
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
        if (res.msg === 'success') {
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
     * 版本信息楼栋信息查看详细接口
     * @param commit
     * @param costBasicVersionBuilding
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getTargetCostKeyIndex({
      commit
    }, costBasicVersionBuilding) {
      return examineBuildingBasicVersion(costBasicVersionBuilding).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_BASIC_VERSION_BUILDING, res.data)
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
     * 项目规划指标总体指标基本信息、市政输入条件、景观指标、土方平衡查看详细接口
     * @param commit
     * @param basicOverallIndex
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getPlanningOverallIndex({
      commit
    }, basicOverallIndex) {
      return examinePlanningOverallIndex(basicOverallIndex).then(res => {
        if (res.data.msg === 'success') {
          commit(PLANNING_OVERALL_INDEX, res.data)
        }
        return res.data
      })
    },
    /**
     * 目标成本关键指标变化查询接口
     * @param commit
     * @param planningKeyIndex
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getPlanningKeyIndex({
      commit
    }, planningKeyIndex) {
      return searchTargetCostKeyIndex(planningKeyIndex).then(res => {
        if (res.data.msg === 'success') {
          commit(PLANNING_KEY_INDEX, res.data)
        }
        return res.data
      })
    },
    /**
     * 项目规划指标总体指标主要材料价格（不含税）查看详细接口
     * @param commit
     * @param mainPrice
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getPlanningOverallIndexMainPriceNo({
      commit
    }, mainPrice) {
      return examinePlanningOverallIndexMainPriceNo(mainPrice).then(res => {
        if (res.data.msg === 'success') {
          commit(PLANNING_INDEX_MAIN_PRICE_NO, res.data)
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
        if (res.msg === 'success') {
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
    },
    /**
     * 目标成本成本测算调整合约规划查看详细
     * @param commit
     * @param contractCalculateAdjust
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getContractCalculateAdjust({
      commit
    }, contractCalculateAdjust) {
      return examineContractCalculateAdjust(contractCalculateAdjust).then(res => {
        if (res.data.msg === 'success') {
          commit(CONTRACT_CALCULATE_ADJUST, res.data)
        }
        return res.data
      })
    },
    /**
     * 目标成本成本测算调整测算查看详细接口
     * @param commit
     * @param calculateAdjust
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getCalculateAdjust({
      commit
    }, calculateAdjust) {
      return examineCalculateAdjust(calculateAdjust).then(res => {
        if (res.data.msg === 'success') {
          commit(CONTRACT_CALCULATE_ADJUST, res.data)
        }
        return res.data
      })
    },
    /**
     * 非建安成本测算查看详细接口
     * @param commit
     * @param noneFabricationCalculateAdjust
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getNoneFabricationCalculateAdjust({
      commit
    }, noneFabricationCalculateAdjust) {
      return examineNoneFabricationCalculateAdjust(noneFabricationCalculateAdjust).then(res => {
        if (res.data.msg === 'success') {
          commit(NONE_FABRICATION_CALCULATE_ADJUST, res.data)
        }
        return res.data
      })
    },
    /**
     * 建安成本测算地基与基础工程、成本测算高层，非人防车库，人防车库层级选项，人防车库查看、成本测算洋房层级选项、成本测算洋房查看详细接口
     * @param commit
     * @param fabricationBasicCalculate
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getFabricationBasicCalculate({
      commit
    }, fabricationBasicCalculate) {
      return examineFabricationBasicsCalculate(fabricationBasicCalculate).then(res => {
        if (res.data.msg === 'success') {
          commit(FABRICATION_BASICS_CALCULATE, res.data)
        }
        return res.data
      })
    },
    /**
     * 合约规划表中合约规划分解查看详细接口
     * @param commit
     * @param contractCalculateDisassemble
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getContractCalculateDisassemble({
      commit
    }, contractCalculateDisassemble) {
      return examineContractDisassemble(contractCalculateDisassemble).then(res => {
        if (res.data.msg === 'success') {
          commit(CONTRACT_CALCULATE_DISASSEMBLE, res.data)
        }
        return res.data
      })
    },
    /**
     * 合约规划看详细接口
     * @param commit
     * @param contractTable
     * @returns {PromiseLike<T> | Promise<T> | *}
     */
    getContractTable({
      commit
    }, contractTable) {
      return examineContract(contractTable).then(res => {
        if (res.data.msg === 'success') {
          commit(CONTRACT_TABLE, res.data)
        }
        return res.data
      })
    },
    /**
     * 财务口径分摊查看详细、管理口径分摊查看详细接口
     * @param commit
     * @param keywords
     * @returns {PromiseLike<T> | Promise<T>}
     */
    GetCaliberApportion({ commit }, keywords) {
      return getCaliberApportion(keywords).then(res => {
        // 根据入参判断要更新的state
        if (keywords.sharetype === '3') {
          // 财务口径
          commit(SET_FINANCE_APPORTION, res.data)
        } else if (keywords.sharetype === '4') {
          // 管理口径
          commit(SET_MANAGE_APPORTION, res.data)
        }
      })
    },
    /**
     * 组团及楼栋分摊组团表查看详细接口
     * @param commit
     * @param groupBuildingApportion
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getGroupBuildingApportion({
      commit
    }, groupBuildingApportion) {
      return examineGroupBuildingApportion(groupBuildingApportion).then(res => {
        if (res.data.msg === 'success') {
          commit(GROUP_BUILDING_APPORTION, res.data)
        }
        return res.data
      })
    },
    /**
     * 组团及楼栋分摊组团表楼栋详细接口
     * @param commit
     * @param groupBuildingApportion
     * @returns {PromiseLike<T> | Promise<T> | *}
     */
    getGroupBuildingTable({
      commit
    }, groupBuildingApportion) {
      return examineGroupBuildingTable(groupBuildingApportion).then(res => {
        return res.data
      })
    },
    /**
     * 项目成本标尺项目成功标尺图表接口
     * @param commit
     * @param successMetricsDiagram
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getSuccessMetricsDiagram({
      commit
    }, successMetricsDiagram) {
      return examineSuccessMetricsDiagram(successMetricsDiagram).then(res => {
        if (res.data.msg === 'success') {
          commit(SUCCESS_METRICS_DIAGRAM, res.data)
        }
        return res.data
      })
    },
    /**
     * 调整分析开发成本调整原因查看详细接口
     * @param commit
     * @param costAdjustmentReason
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getCostAdjustmentReason({
      commit
    }, costAdjustmentReason) {
      return examineCostAdjustmentReason(costAdjustmentReason).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_ADJUSTMENT_REASON, res.data)
        }
        return res.data
      })
    },
    /**
     * 调整分析费项成本变化情况查看详细接口
     * @param commit
     * @param costAdjustmentChange
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getCostAdjustmentChange({
      commit
    }, costAdjustmentChange) {
      return examineCostAdjustmentChange(costAdjustmentChange).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_ADJUSTMENT_CHANGE, res.data)
        }
        return res.data
      })
    },
    /**
     * 调整分析面积规划指标变化情况查看详细/导出接口
     * @param commit
     * @param costAdjustmentAreaChange
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getCostAdjustmentAreaChange({
      commit
    }, costAdjustmentAreaChange) {
      return examineCostAdjustmentAreaChange(costAdjustmentAreaChange).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_ADJUSTMENT_CHANGE, res.data)
        }
        return res.data
      })
    },
    /**
     * 审核要点设计费限额查看详细接口
     * @param commit
     * @param approveDesignQuota
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getApproveDesignQuota({
      commit
    }, approveDesignQuota) {
      return examineApproveDesignQuota(approveDesignQuota).then(res => {
        if (res.data.msg === 'success') {
          commit(APPROVE_DESIGN_QUOTA, res.data)
        }
        return res.data
      })
    },
    /**
     * 审核要点负合约规划查看详细接口
     * @param commit
     * @param approveNegativeContract
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getApproveNegativeContract({
      commit
    }, approveNegativeContract) {
      return examineApproveNegativeContract(approveNegativeContract).then(res => {
        if (res.data.msg === 'success') {
          commit(APPROVE_NEGATIVE_CONTRACT, res.data)
        }
        return res.data
      })
    },
    /**
     * 审核要点目标成本特征图表查看详细接口（2个：含土地费，不含土地费）
     * @param commit
     * @param approveTargetCharacteristic
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getApproveTargetCharacteristic({
      commit
    }, approveTargetCharacteristic) {
      return examineApproveTargetCharacteristic(approveTargetCharacteristic).then(res => {
        if (res.data.msg === 'success') {
          commit(APPROVE_TARGET_CHARACTERISTIC, res.data)
        }
        return res.data
      })
    },
    /**
     * 目标成本编制说明审核要点目标成本含量及价格对比图表查看详细接口
     * @param commit
     * @param approveTargetPriceComparison
     * @returns {PromiseLike<T> | Promise<T>}
     */
    getApproveTargetPriceComparison({
      commit
    }, approveTargetPriceComparison) {
      return examineApproveTargetPriceComparison(approveTargetPriceComparison).then(res => {
        if (res.data.msg === 'success') {
          commit(APPROVE_TARGET_PRICE_COMPARISON, res.data)
        }
        return res.data
      })
    },
    /**
     * 目标成本编制说明项目建造标准查看详细接口
     * @param commit
     * @param approveTargetPriceComparison
     * @returns {PromiseLike<T> | Promise<T> | *}
     */
    getConstructionStandardTable({
      commit
    }, constructionStandard) {
      return getConstructionStandard(constructionStandard).then(res => {
        if (res.data.msg === 'success') {
          commit(CONSTRUCTION_STANDARD, res.data)
        }
        return res.data
      })
    }
  }
}

export default targetCost
