import {
  getHomePage,
  costVersion,
  updateCostVersion,
  addCostVersion,
  costVersionSummary,
  costBase,
  addCostBase,
  updateCostBase,
  costSpecialMatter,
  addCostSpecialMatter,
  updateCostSpecialMatter,
  deleteCostSpecialMatter,
  costs,
  updateCost,
  addCost,
  costMaterialAllocations,
  updateCostMaterialAllocation,
  addCostMaterialAllocation,
  costFinancialApportionment,
  costProjectConfiguration,
  addCostProjectConfiguration,
  updateCostProjectConfiguration,
  costLimitCoefficient,
  updateCostLimitCoefficient
} from 'api/investmentCost'

import {
  GET_HOME_PAGE_DATA,
  COST_VERSION,
  COST_VERSION_SUMMARY,
  COST_BASE,
  COST_SPECIAL_MATTER,
  COSTS,
  COST_MATERIAL_ALLOCATION,
  COST_FINANCIAL_APPORTIONMENT,
  COST_PROJECT_CONFIGURATION,
  COST_LIMIT_COEFFICIENT
} from '../../constants/investmentCost'
import specialItem from './specialItem'

const $investmentCost = {
  modules: {
    specialItem
  },
  state: {
    homePageKeyWords: {},
    homePageData: [],
    costVersion: {},
    costVersionSummary: {},
    costArea: {},
    costSpecialMatter: [],
    costs: [],
    costMaterialAllocations: [],
    costFinancialApportionment: [],
    costProjectConfiguration: [],
    costLimitCoefficient: []
  },

  mutations: {
    [GET_HOME_PAGE_DATA](state, data) {
      state.homePageData = data
    },
    [COST_VERSION](state, data) {
      state.costVersion = data
    },
    [COST_VERSION_SUMMARY](state, data) {
      state.costVersionSummary = data
    },
    [COST_BASE](state, data) {
      state.costArea = data
    },
    [COST_SPECIAL_MATTER](state, data) {
      state.costSpecialMatter = data
    },
    [COSTS](state, data) {
      state.costs = data
    },
    [COST_MATERIAL_ALLOCATION](state, data) {
      state.costMaterialAllocations = data
    },
    [COST_FINANCIAL_APPORTIONMENT](state, data) {
      state.costFinancialApportionment = data
    },
    [COST_PROJECT_CONFIGURATION](state, data) {
      state.costProjectConfiguration = data
    },
    [COST_LIMIT_COEFFICIENT](state, data) {
      state.costLimitCoefficient = data
    }
  },

  actions: {
    /**
     * 查询投模成本主页信息
     * @param commit
     * @param homePageKeyWords
     * @returns {Promise<T>}
     * @constructor
     */
    GetHomePage({
                  commit
                }, homePageKeyWords) {
      return getHomePage(homePageKeyWords).then(res => {
        commit(GET_HOME_PAGE_DATA, res.data)
        return res.data
      })
    },
    /**
     * 用于查看投模成本版本信息
     * @param commit
     * @param investmentVersionId
     * @returns {Promise<T>}
     * @constructor
     */
    CostVersion({
                  commit
                }, investmentVersionId) {
      return costVersion(investmentVersionId).then(res => {
        commit(COST_VERSION, res.data)
        return res.data
      })
    },
    /**
     * 用于修改投模成本版本信息
     * @param commit
     * @param costVersion
     * @returns {Promise<T>}
     * @constructor
     */
    UpdateCostVersion({
                        commit
                      }, costVersion) {
      return updateCostVersion(costVersion).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_VERSION, costVersion)
        }
        return res.data
      })
    },
    /**
     * 用于新增投模成本版本信息
     * @param commit
     * @param costVersion
     * @returns {Promise<T>}
     * @constructor
     */
    AddCostVersion({
                     commit
                   }, costVersion) {
      return addCostVersion(costVersion).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_VERSION, costVersion)
        }
        return res.data
      })
    },
    /**
     * 用于查看投模成本版本摘要信息
     * @param commit
     * @param investmentVersionId
     * @returns {Promise<T>}
     * @constructor
     */
    CostVersionSummary({
                         commit
                       }, investmentVersionId) {
      return costVersionSummary(investmentVersionId).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_VERSION_SUMMARY, res.data)
        }
        return res.data
      })
    },
    /**
     * 用于查看投模成本基本信息
     * @param commit
     * @param investmentcostid
     * @returns {PromiseLike<T> | Promise<T> | *}
     * @constructor
     */
    CostBase({
               commit
             }, investmentcostid) {
      return costBase(investmentcostid).then(res => {
        commit(COST_BASE, res.data)
        return res.data
      })
    },
    /**
     * 用于新增投模成本基本信息
     * @param commit
     * @param costBase
     * @returns {Promise<T>}
     * @constructor
     */
    AddCostBase({
                  commit
                }, costBase) {
      return addCostBase(costBase).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_BASE, costBase)
        }
        return res.data
      })
    },
    /**
     * 用于修改投模成本基本信息
     * @param commit
     * @param costBase
     * @returns {Promise<T>}
     * @constructor
     */
    UpdateCostBase({
                     commit
                   }, costBase) {
      return updateCostBase(costBase).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_BASE, costBase)
        }
        return res.data
      })
    },
    /**
     * 用于投模成本特殊事项清单查询、查询特殊事项清单信息
     * @param commit
     * @param investmentCostId
     * @returns {Promise<T>}
     * @constructor
     */
    CostSpecialMatter({
                        commit
                      }, investmentCostId) {
      return costSpecialMatter(investmentCostId).then(res => {
        commit(COST_SPECIAL_MATTER, res.data)
        return res.data
      })
    },
    /**
     * 投模成本编制说明特殊事项清单新增接口
     * @param commit
     * @param costSpecialMatter
     * @returns {Promise<T>}
     * @constructor
     */
    AddCostSpecialMatter({
                           commit
                         }, costSpecialMatter) {
      return addCostSpecialMatter(costSpecialMatter).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_SPECIAL_MATTER, costSpecialMatter)
        }
        return res.data
      })
    },
    /**
     * 投模成本编制说明特殊事项清单修改接口
     * @param commit
     * @param costSpecialMatter
     * @returns {Promise<T>}
     * @constructor
     */
    UpdateCostSpecialMatter({
                              commit
                            }, costSpecialMatter) {
      return updateCostSpecialMatter(costSpecialMatter).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_SPECIAL_MATTER, costSpecialMatter)
        }
        return res.data
      })
    },
    /**
     * 投模成本编制说明特殊事项清单删除接口
     * @param commit
     * @param costSpecialMatter
     * @returns {Promise<T>}
     * @constructor
     */
    DeleteCostSpecialMatter({
                              commit
                            }, investmentSpecialListId) {
      return deleteCostSpecialMatter(investmentSpecialListId).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_SPECIAL_MATTER, {})
        }
        return res.data
      })
    },
    /**
     * 用于投模成本投模成本-投模成本查询、导出投模成本-投模成本信息
     * @param commit
     * @param investmentcostid
     * @returns {Promise<T>}
     * @constructor
     */
    Costs({
            commit
          }, investmentcostid) {
      return costs(investmentcostid).then(res => {
        commit(COSTS, res.data)
        return res.data
      })
    },
    /**
     * 用于投模成本投模成本-修改投模成本信息
     * @param commit
     * @param cost
     * @returns {Promise<T>}
     * @constructor
     */
    UpdateCost({
                 commit
               }, cost) {
      return updateCost(cost).then(res => {
        if (res.data.msg === 'success') {
          commit(COSTS, cost)
        }
        return res.data
      })
    },
    /**
     * 用于投模成本投模成本-添加投模成本信息
     * @param commit
     * @param cost
     * @returns {Promise<T>}
     * @constructor
     */
    AddCost({
              commit
            }, cost) {
      return addCost(cost).then(res => {
        if (res.data.msg === 'success') {
          commit(COSTS, cost)
        }
        return res.data
      })
    },
    /**
     * 投模成本材料配置查询
     * @param commit
     * @param investmentcostid
     * @returns {Promise<T>}
     * @constructor
     */
    CostMaterialAllocations({
                              commit
                            }, investmentcostid) {
      return costMaterialAllocations(investmentcostid).then(res => {
        commit(COST_MATERIAL_ALLOCATION, res.data)
        return res.data
      })
    },
    /**
     * 投模成本材料配置修改
     * @param commit
     * @param costMaterialAllocation
     * @returns {Promise<T>}
     * @constructor
     */
    UpdateCostMaterialAllocation({
                                   commit
                                 }, costMaterialAllocation) {
      return updateCostMaterialAllocation(costMaterialAllocation).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_MATERIAL_ALLOCATION, costMaterialAllocation)
        }
        return res.data
      })
    },
    /**
     * 投模成本材料配置新增
     * @param commit
     * @param costMaterialAllocation
     * @returns {Promise<T>}
     * @constructor
     */
    AddCostMaterialAllocation({
                                commit
                              }, costMaterialAllocation) {
      return addCostMaterialAllocation(costMaterialAllocation).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_MATERIAL_ALLOCATION, costMaterialAllocation)
        }
        return res.data
      })
    },
    /**
     * 用于查看投模成本模块管理-投模科目信息
     * 用于导出投模成本模块管理-项目配置设置信息
     * @param commit
     * @param investmentcostid
     * @param sharetype
     * @returns {Promise<T>}
     * @constructor
     */
    CostFinancialApportionment({
                                 commit
                               }, investmentcostid, sharetype) {
      return costFinancialApportionment(investmentcostid, sharetype).then(res => {
        commit(COST_FINANCIAL_APPORTIONMENT, res.data)
        return res.data
      })
    },
    /**
     *用于导出投模成本模块管理-基础配置表-项目配置设置信息
     * @param commit
     * @param investmentcostid
     * @returns {Promise<T>}
     * @constructor
     */
    CostProjectConfiguration({
                               commit
                             }, investmentcostid) {
      return costProjectConfiguration(investmentcostid).then(res => {
        commit(COST_PROJECT_CONFIGURATION, res.data)
        return res.data
      })
    },
    /**
     * 投模成本项目配置新增接口
     * @param commit
     * @param costProjectConfiguration
     * @returns {Promise<T>}
     * @constructor
     */
    AddCostProjectConfiguration({
                                  commit
                                }, costProjectConfiguration) {
      return addCostProjectConfiguration(costProjectConfiguration).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_PROJECT_CONFIGURATION, costProjectConfiguration)
        }
        return res.data
      })
    },
    /**
     * 投模成本项目配置修改接口
     * @param commit
     * @param costProjectConfiguration
     * @returns {Promise<T>}
     * @constructor
     */
    UpdateCostProjectConfiguration({
                                     commit
                                   }, costProjectConfiguration) {
      return updateCostProjectConfiguration(costProjectConfiguration).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_PROJECT_CONFIGURATION, costProjectConfiguration)
        }
        return res.data
      })
    },
    /**
     * 用于查看投模成本模块管理-基础配置表-标准业态信息
     * @param commit
     * @param investmentcostid
     * @returns {Promise<T>}
     * @constructor
     */
    CostLimitCoefficient({
                           commit
                         }, investmentcostid) {
      return costLimitCoefficient(investmentcostid).then(res => {
        commit(COST_LIMIT_COEFFICIENT, investmentcostid)
        return res.data
      })
    },
    /**
     * 用于修改投模成本模块管理-基础配置表-标准业态信息
     * @param commit
     * @param costLimitCoefficient
     * @returns {Promise<T>}
     * @constructor
     */
    UpdateCostLimitCoefficient({
                           commit
                         }, costLimitCoefficient) {
      return updateCostLimitCoefficient(costLimitCoefficient).then(res => {
        if (res.data.msg === 'success') {
          commit(COST_LIMIT_COEFFICIENT, costLimitCoefficient)
        }
        return res.data
      })
    }
  }
}

export default $investmentCost
