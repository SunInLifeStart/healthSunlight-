/**
 * 基准成本 store
 */
import {
  findStandardCost,
  deleteStandardCost,
  findStandardCostBase,
  saveStandardCostBase,
  lookStandardCostProPlanTotalIndexBase,
  lookStandardCostProPlanTotalIndex,
  lookStandardCostProPlanTotalIndexMainPrice,
  lookStandardMunicipalEarthDto,
  lookStandardViewIndicatorDto,
  lookStandardEarthworkDto,
  lookCmprotypeAreaForDto,
  lookProtypeAttributeDto,
  lookProductTypeDto,
  lookStandardProtypeBuild,
  lookStandardCollectPlan,
  lookStandardCollect,
  lookStandardNotBuild,
  lookStandardCostBuildBaseEngineer,
  lookStandardCostBuildHeight,
  getStandardCostBuildBungalowsHierarchy,
  lookStandardCostBuildBungalows,
  getStandardCostBuildNoneGarageHierarchy,
  lookStandardCostBuildNoneGarage,
  lookStandardCostBuildGarageHierarchy,
  lookStandardCostBuildGarage,
  saveStandardCostStatementShareFinance,
  lookStandardCostStatementShareFinance,
  lookStandardCostStatementBuildContract,
  saveStandardCostDataBaseLimit,
  lookStandardCostDataBaseLimit,
  lookStandardCostDataBaseEarlier,
  lookStandardCostDataBaseAncillaryFacility,
  lookStandardCostDataBaseBaseFacility,
  lookStandardCostDataEngineeringCost,
  lookStandardCostDataBaseSupplement,
  lookStandardCostDataBaseSpecialList,
  saveStandardCostDataBaseSpecialList
} from 'api/standardCost'

import {
  SET_STANDARDCOSTS,
  DELETE_STANDARDCOST,
  SET_STANDARDCOSTBASES,
  SET_TOTALINDEXBASES,
  SET_TOTALINDEXES,
  SET_MAINMATERIALSPRICES,
  SET_MUNICIPALS,
  SET_VIEWINDICATORS,
  SET_EARTHWORKS,
  SET_PRODUCTTYPEAREAS,
  SET_PRODUCTTYPEATTRIBUTES,
  SET_PRODUCTTYPES,
  SET_PRODUCTTYPEBUILDS,
  SET_COLLECTPLANS,
  SET_COLLECTS,
  SET_NOTBUILDS,
  SET_BUILDANDBASEENGINEERS,
  SET_BUILDHEIGHTS,
  SET_BUNGALOWSHIERARCHIES,
  SET_BUILDBUNGALOWS,
  SET_NONEGARAGEHIERARCHIES,
  SET_NONEGARAGES,
  SET_GARAGEHIERARCHIES,
  SET_GARAGES,
  SET_STATEMENTSHAREFINANCES,
  SET_STATEMENTSHARECONTRACTS,
  SET_DATABASELIMIT,
  SET_DATABASE_EARLIER_PRICES,
  SET_DATABASE_ANCILLARY_FACILITY_PRICES,
  SET_DATABASE_BASE_FACILITY_PRICES,
  SET_DATABASE_ENGINEERING_PRICES,
  SET_DATABASE_SUPPLEMENTS,
  SET_DATABASE_SPECIAL_LIST
} from '../../constants/standardCost'

const standardCost = {

  state: {
    standardCosts: [], // 基准成本信息
    standardCostBases: [], // 基准成本基础信息
    totalIndexBases: [], // 基准成本编制说明项目规划指标总体指标基本信息
    totalIndexes: [], // 基准成本编制说明项目规划指标总体指标总体指标
    mainMaterialsPrices: [], // 基准成本编制说明项目规划指标总体指标主要材料价格
    municipals: [], // 基准成本编制说明项目规划指标总体指标市政输入条件
    viewIndicators: [], // 基准成本编制说明项目规划指标总体指标景观指标
    earthWorks: [], // 基准成本编制说明项目规划指标总体指标土方平衡
    productTypeAreas: [], // 基准成本编制说明项目规划指标业态面积
    productTypeAttributes: [], // 基准成本编制说明项目规划指标业态属性
    productTypes: [], // 基准成本编制说明业态配置标准
    productTypeBuilds: [], // 基准成本编制说明业态建造标准
    collectPlans: [], // 基准成本编制说明成本汇总规划指标
    collects: [], // 基准成本编制说明成本汇总
    notBuilds: [], // 基准成本编制说明基本成本非建安成本测算
    buildAndBaseEngineers: [], // 基准成本编制说明基本成本建安成本测算地基与基础工程
    buildHeights: [], // 基准成本编制说明基本成本建安成本测算高层信息
    bungalowHierarchies: [], // 基准成本编制说明基本成本建安成本测算洋房层级选项
    bungalows: [], // 基准成本编制说明基本成本建安成本测算洋房查看详细
    noneGarageHierarchies: [], // 基准成本编制说明基本成本建安成本测算非人防车库层级选项
    noneGarages: [], // 基准成本编制说明基本成本建安成本测算非人防车库查看详细
    garageHierarchies: [], // 基准成本编制说明基本成本建安成本测算人防车库层级选项
    garages: [], // 基准成本编制说明基本成本建安成本测算人防车库查看详细
    statementShareFinances: [], // 基准成本编制说明报表-成本分摊表-财务/管理信息
    statementShareContracts: [], // 基基准成本编制说明报表-建安合约规划详细
    dataBaseLimit: [], // 基准成本编制说明数据库-设计费限额
    dataBaseEarlierPrices: [], // 基准成本编制说明数据库-前后期收费数据库前期工程费详细
    dataBaseAncFacPrices: [], // 基准成本编制说明数据库-前后期收费数据库配套设施费查看详细接口
    dataBaseBaseFacPrices: [], // 基准成本编制说明数据库-前后期收费数据库基础设施费查看详细接口
    dataBaseEngineeringPrices: [], // 基准成本编制说明数据库-前后期收费数据库工程相关费详细
    supplements: [], // 基准成本编制说明数据库-前后期收费数据库补充查看详细接口
    specialList: [] // 基准成本编制说明数据库-特殊事项清单
  },

  mutations: {
    [SET_STANDARDCOSTS](state, data) {
      state.standardCosts = data
    },
    [DELETE_STANDARDCOST](state, _standardCostId) {
      // 删除对应的基准成本信息
      for (let i = 0; i < state.standardCosts.length; i++) {
        if (state.standardCosts[i].standardcostid === _standardCostId) {
          state.standardCosts.splice(i, 1)
          break
        }
      }
    },
    [SET_STANDARDCOSTBASES](state, data) {
      state.standardCostBases = data
    },
    [SET_TOTALINDEXBASES](state, data) {
      state.totalIndexBases = data
    },
    [SET_TOTALINDEXES](state, data) {
      state.totalIndexes = data
    },
    [SET_MAINMATERIALSPRICES](state, data) {
      state.mainMaterialsPrices = data
    },
    [SET_MUNICIPALS](state, data) {
      state.municipals = data
    },
    [SET_VIEWINDICATORS](state, data) {
      state.viewIndicators = data
    },
    [SET_EARTHWORKS](state, data) {
      state.earthWorks = data
    },
    [SET_PRODUCTTYPEAREAS](state, data) {
      state.productTypeAreas = data
    },
    [SET_PRODUCTTYPEATTRIBUTES](state, data) {
      state.productTypeAttributes = data
    },
    [SET_PRODUCTTYPES](state, data) {
      state.productTypes = data
    },
    [SET_PRODUCTTYPEBUILDS](state, data) {
      state.productTypeBuilds = data
    },
    [SET_COLLECTPLANS](state, data) {
      state.collectPlans = data
    },
    [SET_NOTBUILDS](state, data) {
      state.notBuilds = data
    },
    [SET_BUILDANDBASEENGINEERS](state, data) {
      state.buildAndBaseEngineers = data
    },
    [SET_BUILDHEIGHTS](state, data) {
      state.buildHeights = data
    },
    [SET_BUNGALOWSHIERARCHIES](state, data) {
      state.bungalowHierarchies = data
    },
    [SET_BUILDBUNGALOWS](state, data) {
      state.bungalows = data
    },
    [SET_NONEGARAGEHIERARCHIES](state, data) {
      state.noneGarageHierarchies = data
    },
    [SET_NONEGARAGES](state, data) {
      state.noneGarages = data
    },
    [SET_GARAGEHIERARCHIES](state, data) {
      state.garageHierarchies = data
    },
    [SET_GARAGES](state, data) {
      state.garages = data
    },
    [SET_STATEMENTSHAREFINANCES](state, data) {
      state.statementShareFinances = data
    },
    [SET_STATEMENTSHARECONTRACTS](state, data) {
      state.statementShareContracts = data
    },
    [SET_DATABASELIMIT](state, data) {
      state.dataBaseLimit = data
    },
    [SET_DATABASE_EARLIER_PRICES](state, data) {
      state.dataBaseEarlierPrices = data
    },
    [SET_DATABASE_ANCILLARY_FACILITY_PRICES](state, data) {
      state.dataBaseAncFacPrices = data
    },
    [SET_DATABASE_BASE_FACILITY_PRICES](state, data) {
      state.dataBaseBaseFacPrices = data
    },
    [SET_DATABASE_ENGINEERING_PRICES](state, data) {
      state.dataBaseEngineeringPrices = data
    },
    [SET_DATABASE_SUPPLEMENTS](state, data) {
      state.supplements = data
    },
    [SET_DATABASE_SPECIAL_LIST](state, data) {
      state.specialList = data
    }
  },

  actions: {
    // 基准成本查询接口
    FindStandardCost({ commit }, keywords) {
      return findStandardCost(keywords).then(res => {
        commit(SET_STANDARDCOSTS, res.data.standardcostlist)
        return res.data.standardcostlist
      })
    },
    // 基准成本删除接口
    DeleteStandardCost({ commit }, keywords) {
      return deleteStandardCost(keywords).then(res => {
        // 判断是否删除成功
        if (res && res.data) {
          if (res.data.resultcode === '000') {
            commit(DELETE_STANDARDCOST, keywords.standardcostid)
          }
        }
        return res.data
      })
    },
    // 基准成本编制说明基础信息查询接口
    FindStandardCostBase({ commit }, keywords) {
      return findStandardCostBase(keywords).then(res => {
        commit(SET_STANDARDCOSTBASES, res.data)
        return res.data
      })
    },
    // 基准成本编制说明基础信息保存接口
    SaveStandardCostBase({ commit }, keywords) {
      return saveStandardCostBase(keywords).then(res => {
        commit(SET_STANDARDCOSTBASES, res.data)
      })
    },
    // 基准成本编制说明项目规划指标总体指标基本信息查看详细接口
    LookStandardCostProPlanTotalIndexBase({ commit }, keywords) {
      return lookStandardCostProPlanTotalIndexBase(keywords).then(res => {
        commit(SET_TOTALINDEXBASES, res.data)
      })
    },
    // 基准成本编制说明项目规划指标总体指标总体指标查看详细接口
    LookStandardCostProPlanTotalIndex({ commit }, keywords) {
      return lookStandardCostProPlanTotalIndex(keywords).then(res => {
        commit(SET_TOTALINDEXES, res.data)
        return res.data
      })
    },
    // 基准成本编制说明项目规划指标总体指标主要材料价格
    LookStandardCostProPlanTotalIndexMainPrice({ commit }, keywords) {
      return lookStandardCostProPlanTotalIndexMainPrice(keywords).then(res => {
        commit(SET_MAINMATERIALSPRICES, res.data)
        return res.data
      })
    },
    // 基准成本编制说明项目规划指标总体指标市政输入条件查看详细接口
    LookStandardMunicipalEarthDto({ commit }, keywords) {
      return lookStandardMunicipalEarthDto(keywords).then(res => {
        commit(SET_MUNICIPALS, res.data)
        return res.data
      })
    },
    // 基准成本编制说明项目规划指标总体指标景观指标
    LookStandardViewIndicatorDto({ commit }, keywords) {
      return lookStandardViewIndicatorDto(keywords).then(res => {
        commit(SET_VIEWINDICATORS, res.data)
        return res.data
      })
    },
    // 基准成本编制说明项目规划指标总体指标土方平衡
    LookStandardEarthworkDto({ commit }, keywords) {
      return lookStandardEarthworkDto(keywords).then(res => {
        commit(SET_EARTHWORKS, res.data)
        return res.data
      })
    },
    // 基准成本编制说明项目规划指标业态面积
    LookCmprotypeAreaForDto({ commit }, keywords) {
      return lookCmprotypeAreaForDto(keywords).then(res => {
        commit(SET_PRODUCTTYPEAREAS, res.data)
        return res.data
      })
    },
    // 基准成本编制说明项目规划指标业态属性查看详细接口
    LookProtypeAttributeDto({ commit }, keywords) {
      return lookProtypeAttributeDto(keywords).then(res => {
        commit(SET_PRODUCTTYPEATTRIBUTES, res.data)
        return res.data
      })
    },
    // 基准成本编制说明项目规划指标业态配置标准详细接口
    LookProductTypeDto({ commit }, keywords) {
      return lookProductTypeDto(keywords).then(res => {
        commit(SET_PRODUCTTYPES, res.data)
        return res.data
      })
    },
    // 基准成本编制说明项目规划指标业态建造详细接口
    LookStandardProtypeBuild({ commit }, keywords) {
      return lookStandardProtypeBuild(keywords).then(res => {
        commit(SET_PRODUCTTYPEBUILDS, res.data)
        return res.data
      })
    },
    // 基准成本编制说明成本汇总规划指标查看详细接口
    LookStandardCollectPlan({ commit }, keywords) {
      return lookStandardCollectPlan(keywords).then(res => {
        commit(SET_COLLECTPLANS, res.data)
      })
    },
    // 基准成本编制说明成本汇总查看详细接口
    LookStandardCollect({ commit }, keywords) {
      return lookStandardCollect(keywords).then(res => {
        commit(SET_COLLECTS, res.data)
        return res.data
      })
    },
    // 基准成本编制说明基本成本非建安成本测算查看详细接口
    LookStandardNotBuild({ commit }, keywords) {
      return lookStandardNotBuild(keywords).then(res => {
        commit(SET_NOTBUILDS, res.data)
        return res.data
      })
    },
    // 基准成本编制说明基本成本建安成本测算地基与基础工程查看详细接口
    LookStandardCostBuildBaseEngineer({ commit }, keywords) {
      return lookStandardCostBuildBaseEngineer(keywords).then(res => {
        commit(SET_BUILDANDBASEENGINEERS, res.data)
        return res.data
      })
    },
    // 基准成本编制说明基本成本建安成本测算高层查看详细接口
    LookStandardCostBuildHeight({ commit }, keywords) {
      return lookStandardCostBuildHeight(keywords).then(res => {
        commit(SET_BUILDHEIGHTS, res.data)
      })
    },
    // 基准成本编制说明基本成本建安成本测算洋房层级选项接口
    GetStandardCostBuildBungalowsHierarchy({ commit }, keywords) {
      return getStandardCostBuildBungalowsHierarchy(keywords).then(res => {
        commit(SET_BUNGALOWSHIERARCHIES, res.data)
      })
    },
    // 基准成本编制说明基本成本建安成本测算洋房查看详细接口
    LookStandardCostBuildBungalows({ commit }, keywords) {
      return lookStandardCostBuildBungalows(keywords).then(res => {
        commit(SET_BUILDBUNGALOWS, res.data)
      })
    },
    // 基准成本编制说明基本成本建安成本测算非人防车库层级选项接口
    GetStandardCostBuildNoneGarageHierarchy({ commit }, keywords) {
      return getStandardCostBuildNoneGarageHierarchy(keywords).then(res => {
        commit(SET_NONEGARAGEHIERARCHIES, res.data)
      })
    },
    // 基准成本编制说明基本成本建安成本测算非人防车库查看详细接口
    LookStandardCostBuildNoneGarage({ commit }, keywords) {
      return lookStandardCostBuildNoneGarage(keywords).then(res => {
        commit(SET_NONEGARAGES, res.data)
      })
    },
    // 基准成本编制说明基本成本建安成本测算人防车库层级选项接口
    LookStandardCostBuildGarageHierarchy({ commit }, keywords) {
      return lookStandardCostBuildGarageHierarchy(keywords).then(res => {
        commit(SET_GARAGEHIERARCHIES, res.data)
      })
    },
    // 基准成本编制说明基本成本建安成本测算人防车库层级选项接口
    LookStandardCostBuildGarage({ commit }, keywords) {
      return lookStandardCostBuildGarage(keywords).then(res => {
        commit(SET_GARAGES, res.data)
      })
    },
    // 基准成本编制说明报表-成本分摊表-财务/管理保存接口
    SaveStandardCostStatementShareFinance({ commit }, keywords) {
      return saveStandardCostStatementShareFinance(keywords).then(res => {
        commit(SET_STATEMENTSHAREFINANCES, res.data)
        return res.data
      })
    },
    // 基准成本编制说明报表-成本分摊表-财务/管理查看详细接口
    LookStandardCostStatementShareFinance({ commit }, keywords) {
      return lookStandardCostStatementShareFinance(keywords).then(res => {
        commit(SET_STATEMENTSHAREFINANCES, res.data)
      })
    },
    // 基准成本编制说明报表-建安合约规划查看详细接口
    LookStandardCostStatementBuildContract({ commit }, keywords) {
      return lookStandardCostStatementBuildContract(keywords).then(res => {
        commit(SET_STATEMENTSHARECONTRACTS, res.data)
      })
    },
    // 基准成本编制说明数据库-设计费限额保存
    SaveStandardCostDataBaseLimit({ commit }, keywords) {
      return saveStandardCostDataBaseLimit(keywords).then(res => {
        commit(SET_DATABASELIMIT, res.data)
      })
    },
    // 基准成本编制说明数据库-设计费限额查看详细接口
    LookStandardCostDataBaseLimit({ commit }, keywords) {
      return lookStandardCostDataBaseLimit(keywords).then(res => {
        commit(SET_DATABASELIMIT, res.data)
        return res.data
      })
    },
    // 基准成本编制说明数据库-前后期收费数据库前期工程费查看详细接口
    LookStandardCostDataBaseEarlier({ commit }, keywords) {
      return lookStandardCostDataBaseEarlier(keywords).then(res => {
        commit(SET_DATABASE_EARLIER_PRICES, res.data)
      })
    },
    // 基准成本编制说明数据库-前后期收费数据库配套设施费查看详细接口
    LookStandardCostDataBaseAncillaryFacility({ commit }, keywords) {
      return lookStandardCostDataBaseAncillaryFacility(keywords).then(res => {
        commit(SET_DATABASE_ANCILLARY_FACILITY_PRICES, res.data)
      })
    },
    // 基准成本编制说明数据库-前后期收费数据库基础设施费查看详细接口
    LookStandardCostDataBaseBaseFacility({ commit }, keywords) {
      return lookStandardCostDataBaseBaseFacility(keywords).then(res => {
        commit(SET_DATABASE_BASE_FACILITY_PRICES, res.data)
      })
    },
    // 基准成本编制说明数据库-前后期收费数据库工程相关费查看详细接口
    LookStandardCostDataEngineeringCost({ commit }, keywords) {
      return lookStandardCostDataEngineeringCost(keywords).then(res => {
        commit(SET_DATABASE_ENGINEERING_PRICES, res.data)
      })
    },
    // 基准成本编制说明数据库-前后期收费数据库补充查看详细接口
    LookStandardCostDataBaseSupplement({ commit }, keywords) {
      return lookStandardCostDataBaseSupplement(keywords).then(res => {
        commit(SET_DATABASE_SUPPLEMENTS, res.data)
      })
    },
    // 基准成本编制说明数据库-特殊事项清单查看详细接口
    LookStandardCostDataBaseSpecialList({ commit }, keywords) {
      return lookStandardCostDataBaseSpecialList(keywords).then(res => {
        commit(SET_DATABASE_SPECIAL_LIST, res.data)
        return res.data
      })
    },
    // 基准成本编制说明数据库-特殊事项清单保存接口
    SaveStandardCostDataBaseSpecialList({ commit }, keywords) {
      return saveStandardCostDataBaseSpecialList(keywords).then(res => {
        commit(SET_DATABASE_SPECIAL_LIST, res.data)
      })
    }
  }
}

export default standardCost
