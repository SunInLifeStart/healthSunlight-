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
  saveVersion,
  lookInvestmentVersion,
  updateCostLimitCoefficient,
  findBaseData,
  findAreaIndicator,
  saveBaseData,
  saveInveAreaIndicator
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
  COST_LIMIT_COEFFICIENT,
  SAVE_VERSION,
  SET_VERSION,
  SET_BASEDATA,
  SET_AREAINDICATOR
} from '../../constants/investmentCost'
import specialItem from './specialItem'
// 计算面积和总价
function investmentTotal(data, that) {
  that.total = data.length
  that.costamtTotal = 0
  that.landareaTotal = 0 // 总面积
  data.forEach(function(value, index) {
    that.costamtTotal += parseFloat(value.costamt)
    that.landareaTotal += parseFloat(value.landarea)
  })
}
/**
 * 面积指标合计计算
 * @param _data
 */
function areaIndicatorTotal(_data) {
  if (!_data) {
    return
  }
  for (let i = 0; i < _data.length; i++) {
    if (!_data[i].nperOne || !_data[i].nperTwo || !_data[i].nperThree || !_data[i].nperFour || !_data[i].nperFive || !_data[i].nperSix || !_data[i].nperSeven || !_data[i].nperEight) {
      _data[i].total = ''
    } else {
      _data[i].total = (parseFloat(_data[i].nperOne) + parseFloat(_data[i].nperTwo) + parseFloat(_data[i].nperThree) +
      parseFloat(_data[i].nperFour) + parseFloat(_data[i].nperFive) + parseFloat(_data[i].nperSix) + parseFloat(_data[i].nperSeven) +
      parseFloat(_data[i].nperEight))
    }
    if (_data[i].children && _data[i].children.length > 0) {
      areaIndicatorTotal(_data[i].children)
    }
  }
}
const investmentCost = {
  modules: {
    specialItem
  },
  state: {
    costHomePageData: [],
    costVersion: {},
    costVersionSummary: {},
    costArea: {},
    costSpecialMatter: [],
    costs: {
      items: [{}],
      columns: [{}]
    },
    costMaterialAllocations: [],
    financieApportionment: {
      items: [{}],
      columns: [{}]
    },
    costProjectConfiguration: [],
    costLimitCoefficient: [],
    versionBodyData: [], // treeTable数据
    total: 0, // 总条数
    costamtTotal: 0, // 总金额
    landareaTotal: 0, // 总金额
    versions: {}, // 投模版本信息
    form: { // 查询条件
      cityId: '',
      organization: '',
      landname: ''
    },
    investmentVersion: {
      version: [
        {
          'cluster': '1组团',
          'operation': '',
          'architectureArea': '8000m'
        },
        {
          'cluster': '2组团',
          'operation': '',
          'architectureArea': '7000m'
        },
        {
          'cluster': '3组团',
          'operation': '',
          'architectureArea': '6000m'
        },
        {
          'cluster': '4组团',
          'operation': '',
          'architectureArea': '5000m'
        },
        {
          'cluster': '3组团',
          'operation': '',
          'architectureArea': '6000m'
        },
        {
          'cluster': '5组团',
          'operation': '',
          'architectureArea': '5000m'
        },
        {
          'cluster': '6组团',
          'operation': '',
          'architectureArea': '4000m'
        },
        {
          'cluster': '7组团',
          'operation': '',
          'architectureArea': '3000m'
        },
        {
          'cluster': '8组团',
          'operation': '',
          'architectureArea': '2000m'
        },
        {
          'cluster': '9组团',
          'operation': '',
          'architectureArea': '1000m'
        }
      ], // 版本摘要
      informations: [
        {
          upTime: '2018-01-01',
          fileType: '网址',
          enclosure: 'www.baidu.com',
          replace: '替换',
          remove: '删除',
          download: '下载'
        },
        {
          upTime: '2018-01-01',
          fileType: '网址2',
          enclosure: 'www.baidu.com',
          replace: '替换',
          remove: '删除',
          download: '下载'
        },
        {
          upTime: '2018-01-01',
          fileType: '网址3',
          enclosure: 'www.baidu.com',
          replace: '替换',
          remove: '删除',
          download: '下载'
        },
        {
          upTime: '2018-01-01',
          fileType: '网址4',
          enclosure: 'www.baidu.com',
          replace: '替换',
          remove: '删除',
          download: '下载'
        }
      ], // 附件
      form: {
        cityId: '',
        area: '',
        landCode: '',
        landName: '',
        planName: '',
        createUserId: '',
        aclculateDATE: '',
        versionRemark: '',
        versionName: ''
      }, // form表单
      areas: [{
        value: '选项2',
        label: '西湖区'
      }],
      landCodes: [{
        value: '选项2',
        label: 'JX2007-003'
      }],
      planNames: [{
        value: '选项2',
        label: '方案一'
      }],
      fileList3: []
    },
    baseData: {}, // 基本信息
    areaIndicator: {
      items: [{}],
      columns: [{}]
    } // 面积指标
  },

  mutations: {
    [SAVE_VERSION]: (state, data) => {
      state.versionBodyData = data
    },
    [SET_VERSION]: (state, data) => {
      state.versions = data
    },
    [GET_HOME_PAGE_DATA](state, data) {
      investmentTotal(data, state)
      state.costHomePageData = data
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
      state.financieApportionment = data
    },
    [COST_PROJECT_CONFIGURATION](state, data) {
      state.costProjectConfiguration = data
    },
    [COST_LIMIT_COEFFICIENT](state, data) {
      state.costLimitCoefficient = data
    },
    [SET_BASEDATA](state, data) {
      state.baseData = data
    },
    [SET_AREAINDICATOR](state, data) {
      state.areaIndicator = data
    }
  },

  actions: {
    // 获取各个项目信息
    SaveVersion({
      commit
    }, ids) {
      return saveVersion(ids).then(res => {
        commit(SAVE_VERSION, res.data)
        return res
      })
    },
    // 查看投模版本信息详情
    LookInvestmentVersion({ commit }, keywords) {
      return lookInvestmentVersion(keywords).then(res => {
        commit(SET_VERSION, res.data)
      }).catch(err => {
        console.log(err)
      })
    },
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
     * 用于投模成本版本信息查询
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
     * 用于查看投模成本模块 财务口径分担
     * @param commit
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
    },
    /**
     * 投模基本信息查询
     * @param commit
     * @param keywords
     * @returns {Promise.<T>}
     * @constructor
     */
    FindBaseData({ commit }, keywords) {
      return findBaseData(keywords).then(res => {
        commit(SET_BASEDATA, res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    /**
     * 获取投模面积指标信息
     * @param commit
     * @param keywords
     * @returns {Promise.<T>}
     * @constructor
     */
    FindAreaIndicator({ commit }, keywords) {
      return findAreaIndicator(keywords).then(res => {
        var data = res.data
        areaIndicatorTotal(res.data.items)
        commit(SET_AREAINDICATOR, data)
      }).catch(err => {
        console.log(err)
      })
    },
    /**
     * 计算投模面积合计信息
     * @param commit
     * @param data
     */
    AreaIndicatorTotal({ commit }, data) {
      areaIndicatorTotal(data.items)
    },
    /**
     * 投模基本信息保存
     * @param commit
     * @param keywords
     * @returns {Promise.<T>}
     * @constructor
     */
    SaveBaseData({ commit }, keywords) {
      return saveBaseData(keywords).then(res => {
        commit(SET_BASEDATA, res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    SaveInveAreaIndicator({ commit }, keywords) {
      return saveInveAreaIndicator(keywords).then(res => {
        var data = res.data
        areaIndicatorTotal(data.items)
        commit(SET_AREAINDICATOR, data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

export default investmentCost
